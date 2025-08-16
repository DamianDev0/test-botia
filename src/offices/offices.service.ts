import { Injectable, NotFoundException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Office } from './schemas/office.schema';
// import { User } from 'src/users/schemas/user.schema';
import { Company } from 'src/companies/schemas/company.schema';

@Injectable()
export class OfficesService {
  constructor(
    // @InjectModel(User.name)
    // private userModel: Model<User>,
    @InjectModel(Company.name)
    private companyModel: Model<Company>,
    @InjectModel(Office.name)
    private officeModel: Model<Office>
  ) {}

  async create(dto: CreateOfficeDto) {
    try {
      // TODO: Comprobar el id del usuario
      // const user = await this.userModel.findById(userId);
      // if (!user) throw new NotFoundException('User not found');

      // TODO: Comprobar el id del usuario
      const company = await this.companyModel.findById(dto.companyId);
      if (!company) throw new NotFoundException('Company not found');

      const office = new this.officeModel(dto);
      await office.save();

      return {
        status: true,
        message: 'Office created successfully',
        data: office
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findAll(companyId: string) {
    try {
      // TODO: Comprobar autorización del usuario
      // Verificar si la empresa existe
      const company = await this.companyModel.findById(companyId);
      if (!company) throw new NotFoundException('Company not found');

      const offices = await this.officeModel.find({ companyId });
      return {
        status: true,
        message: 'Offices read successfully',
        data: offices
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findOne(key: string, id: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const office = await this.officeModel.findById(id);
      if (!office) throw new NotFoundException('Office not found');

      return {
        status: true,
        message: 'Read success',
        data: office
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findOneByName(key: string, name: string, companyId: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const office = await this.officeModel.findOne({
        name: { $regex: name, $options: 'i' },
        companyId
      });
      if (!office) throw new NotFoundException('Office not found');

      return {
        status: true,
        message: 'Read success',
        data: office
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async update(id: string, dto: UpdateOfficeDto) {
    try {
      // TODO
      const office = await this.officeModel.findByIdAndUpdate(
        id, dto, { new: true, runValidators: true }
      );
      if (!office) throw new NotFoundException('Office not found');

      return {
        status: true,
        message: 'Update success',
        data: office
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateStatus(id: string, status: boolean) {
    try {
      let office = await this.officeModel.findById(id);
      if (!office) throw new NotFoundException('Office not found');

      await office.updateOne({ status });
      office = await this.officeModel.findById(id);

      return {
        status: true,
        message: 'Update success',
        data: office
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }
}
