import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTypeChannelDto } from './dto/create-type-channel.dto';
import { UpdateTypeChannelDto } from './dto/update-type-channel.dto';
import { Company } from 'src/companies/schemas/company.schema';
import { Office } from 'src/offices/schemas/office.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TypeChannel } from './schemas/type-channel.schema';

@Injectable()
export class TypeChannelsService {
  constructor(
    // @InjectModel(User.name)
    // private userModel: Model<User>,
    @InjectModel(Company.name)
    private companyModel: Model<Company>,
    @InjectModel(Office.name)
    private officeModel: Model<Office>,
    @InjectModel(TypeChannel.name)
    private typeChannelModel: Model<TypeChannel>
  ) {}

  async create(dto: CreateTypeChannelDto) {
    try {
      const company = await this.companyModel.findById(dto.companyId);
      if (!company) throw new NotFoundException('Company not found');

      const office = await this.officeModel.findById(dto.officeId);
      if (!office) throw new NotFoundException('Office not found');

      const typeChannel = new this.typeChannelModel(dto);
      await typeChannel.save();

      return {
        status: true,
        message: 'Type channel created successfully',
        data: typeChannel
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findAll(companyId: string) {
    try {
      const company = await this.companyModel.findById(companyId);
      if (!company) throw new NotFoundException('Company not found');

      const typeChannels = await this.typeChannelModel.find({ companyId });
      return {
        status: true,
        message: 'Type channels read successfully',
        data: typeChannels
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} typeChannel`;
  }

  update(id: number, updateTypeChannelDto: UpdateTypeChannelDto) {
    return `This action updates a #${id} typeChannel`;
  }
}
