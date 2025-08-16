import { Injectable, NotFoundException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from './schemas/company.schema';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    @InjectModel(Company.name)
    private companyModel: Model<Company>
  ) {}

  async create(dto: CreateCompanyDto, userId: string) {
    try {
      // Comprobar el id del usuario
      const user = await this.userModel.findById(userId);
      if (!user) throw new NotFoundException('User not found');

      const company = new this.companyModel({ ...dto, userId });
      await company.save();

      return {
        status: true,
        message: 'Company created successfully',
        data: company
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findAll() {
    try {
      const companies = await this.companyModel.find();
      return {
        status: true,
        message: 'Companies read successfully',
        data: companies
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findOne(key: string, id: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const company = await this.companyModel.findById(id);
      if (!company) throw new NotFoundException('Company not found');

      return {
        status: true,
        message: 'Read success',
        data: company
      };
    } catch (e) {
      if (e instanceof NotFoundException ||
          e instanceof UnauthorizedException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async update(id: string, dto: UpdateCompanyDto) {
    try {
      const company = await this.companyModel.findByIdAndUpdate(
        id, dto, { new: true, runValidators: true } );
      if (!company) throw new NotFoundException('Company not found');

      return {
        status: true,
        message: 'Update success',
        data: company
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateStatus(id: string, status: boolean) {
    try {
      let company = await this.companyModel.findById(id);
      if (!company) throw new NotFoundException('Company not found');

      await company.updateOne({ status });
      company = await this.companyModel.findById(id);

      return {
        status: true,
        message: 'Update success',
        data: company
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }
}
