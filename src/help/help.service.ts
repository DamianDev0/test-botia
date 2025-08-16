import { Injectable, UnauthorizedException, InternalServerErrorException, NotFoundException, BadRequestException, Delete } from '@nestjs/common';
import { UpdateHelpDto } from './dto/update-help.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Help } from './schemas/help.schema';
import { Company } from 'src/companies/schemas/company.schema';
import { HelpDet } from './schemas/help-det.schema';
import { CreateHelpDto } from './dto/create-help.dto';
import { CreateHelpDetDto } from './dto/create-help-det.dto';
import { UpdateHelpDetDto } from './dto/update-help-det.dto';

@Injectable()
export class HelpService {
  constructor(
    @InjectModel(Help.name) private helpModel: Model<Help>,
    @InjectModel(HelpDet.name) private helpDetModel: Model<HelpDet>,
    @InjectModel(Company.name) private companyModel: Model<Company>
  ) {}

  async createHelp(key: string, dto: CreateHelpDto) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const company = await this.companyModel.findById(dto.companyId);
      if (!company) throw new NotFoundException('Company not found');

      const helps = await this.helpModel.find({
        companyId: company.id,
        status: true,
        admin: dto.admin
      });
      if (helps.length >= 10)
        throw new BadRequestException('Help already has 10 details');
      if (dto.title && dto.title.length > 24)
        throw new BadRequestException('Title must be less than 24 characters');
      else if (!dto.title && dto.help.length > 24)
        throw new BadRequestException('Help must be less than 24 characters');

      const help = new this.helpModel(dto);
      await help.save();

      return {
        status: true,
        message: 'Help created successfully',
        data: help,
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findAllHelps(key: string, companyId: string, admin: boolean) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const company = await this.companyModel.findById(companyId);
      if (!company) throw new NotFoundException('Company not found');

      const helps = await this.helpModel
        .find({ companyId, status: true, admin })
        .sort({ order: 1 });

      return {
        status: true,
        message: 'Helps found',
        data: helps,
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findOneHelp(key: string, id: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const help = await this.helpModel.findById(id);
      return {
        status: true,
        message: 'Help found',
        data: help,
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateHelp(key: string, id: string, dto: UpdateHelpDto) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      let help = await this.helpModel.findById(id);
      if (!help) throw new NotFoundException('Help not found');
      if (dto.title && dto.title.length > 24)
        throw new BadRequestException('Title must be less than 24 characters');

      help = await this.helpModel.findByIdAndUpdate(id, dto, { new: true });
      if (!help) throw new NotFoundException('Help not found');

      return {
        status: true,
        message: 'Help updated successfully',
        data: help
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateHelpStatus(key: string, id: string, status: boolean) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      let help = await this.helpModel.findById(id);
      if (!help) throw new NotFoundException('Help not found');

      if (status) {
        const helps = await this.helpModel.find({
          companyId: help.companyId,
          status: true
        });
        if (helps.length >= 10)
          throw new BadRequestException('Company already has 10 helps');
      }

      help = await this.helpModel.findByIdAndUpdate(
        id, { status }, { new: true });
      if (!help) throw new NotFoundException('Help not found');

      return {
        status: true,
        message: 'Update success',
        data: help
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async createHelpDet(key: string, dto: CreateHelpDetDto) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const det = await this.helpModel.findById(dto.helpId);
      if (!det) throw new NotFoundException('Help not found');

      const dets = await this.helpDetModel.find({
        helpId: det.id,
        status: true
      });
      if (dets.length >= 10)
        throw new BadRequestException('Help already has 10 details');
      if (dto.title && dto.title.length > 24)
        throw new BadRequestException('Title must be less than 24 characters');
      else if (!dto.title && dto.help.length > 24)
        throw new BadRequestException('Help must be less than 24 characters');

      const helpDet = new this.helpDetModel({
        ...dto,
        companyId: det.companyId,
        officeId: det.officeId
      });
      await helpDet.save();

      return {
        status: true,
        message: 'Help detail created successfully',
        data: helpDet,
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findAllHelpsDet(key: string, helpId: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const help = await this.helpModel.findById(helpId);
      if (!help) throw new NotFoundException('Help not found');

      const dets = await this.helpDetModel
        .find({ helpId, status: true })
        .sort({ order: 1 });

      return {
        status: true,
        message: 'Help details found',
        data: dets,
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findOneHelpDet(key: string, id: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const det = await this.helpDetModel.findById(id);
      if (!det) throw new NotFoundException('Help detail not found');

      return {
        status: true,
        message: 'Help detail found',
        data: det,
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateHelpDet(key: string, id: string, dto: UpdateHelpDetDto) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      let det = await this.helpDetModel.findById(id);
      if (!det) throw new NotFoundException('Help detail not found');
      if (dto.title && dto.title.length > 24)
        throw new BadRequestException('Title must be less than 24 characters');

      det = await this.helpDetModel.findByIdAndUpdate(id, dto, { new: true });
      if (!det) throw new NotFoundException('Help detail not found');

      return {
        status: true,
        message: 'Help detail updated successfully',
        data: det,
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateHelpDetStatus(key: string, id: string, status: boolean) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      let det = await this.helpDetModel.findById(id);
      if (!det) throw new NotFoundException('Help detail not found');

      if (status) {
        const dets = await this.helpDetModel.find({
          helpId: det.helpId,
          status: true
        });
        if (dets.length >= 10)
          throw new BadRequestException('Help already has 10 details');
      }

      det = await this.helpDetModel.findByIdAndUpdate(id, { status }, { new: true });
      if (!det) throw new NotFoundException('Help detail not found');

      return {
        status: true,
        message: 'Update success',
        data: det,
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }
}
