import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Link } from './schemas/link.schema';
import { Company } from 'src/companies/schemas/company.schema';
import { Office } from 'src/offices/schemas/office.schema';
import { LinkParam } from './schemas/link-param.schema';
import { CreateLinkParamDto } from './dto/create-link-param.dto';
import { UpdateLinkParamDto } from './dto/update-link-param.dto';
import { CreateLinkWordDto } from './dto/create-link.-word.dto';
import { LinkWord } from './schemas/link-words.schema';

@Injectable()
export class LinksService {
  constructor(
    @InjectModel(Link.name) private linkModel: Model<Link>,
    @InjectModel(LinkParam.name) private linkParamModel: Model<LinkParam>,
    @InjectModel(Company.name) private companyModel: Model<Company>,
    @InjectModel(Office.name) private officeModel: Model<Office>,
    @InjectModel(LinkWord.name) private linkWordModel: Model<LinkWord>,
  ) {}

  async create(dto: CreateLinkDto) {
    try {
      // Verificar si la empresa existe
      const company = await this.companyModel.findById(dto.companyId);
      if (!company) throw new NotFoundException('Company not found');

      // Verificar si la oficina existe
      const office = await this.officeModel.findById(dto.officeId);
      if (!office) throw new NotFoundException('Office not found');

      const link = await this.linkModel.create(dto);
      await link.save();

      return {
        status: true,
        message: 'Link created successfully',
        data: link
      };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException(error);
    }
  }

  async createLinkWord(dto: CreateLinkWordDto) {
    try {
      const link = await this.linkModel.findById(dto.linkId);
      if (!link) throw new NotFoundException('Link not found');

      const linkWord = await this.linkWordModel.create(dto);
      await linkWord.save();

      return {
        status: true,
        message: 'Link word created successfully',
        data: linkWord
      };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException(error);
    }
  }

  async createLinkParam(dto: CreateLinkParamDto) {
    try {
      const link = await this.linkModel.findById(dto.linkId);
      if (!link) throw new NotFoundException('Link not found');

      const linkParam = await this.linkParamModel.create(dto);
      await linkParam.save();

      return {
        status: true,
        message: 'Link parameter created successfully',
        data: linkParam
      };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(key: string, companyId: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      // TODO: Comprobar autorización del usuario
      // Verificar si la empresa existe
      const company = await this.companyModel.findById(companyId);
      if (!company) throw new NotFoundException('Company not found');

      const links = await this.linkModel.find({ companyId });
      return {
        status: true,
        message: 'Links read successfully',
        data: links
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }
  
  async findLinkParams(key: string, linkId: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const linkParams = await this.linkParamModel.find({ linkId });
      return {
        status: true,
        message: 'Link params read successfully',
        data: linkParams
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findOne(key: string, id: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const link = await this.linkModel.findById(id);
      if (!link) throw new NotFoundException('Link not found');
      return {
        status: true,
        message: 'Link read successfully',
        data: link
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findLinkWord(key: string, word: string, companyId: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const linkWord = await this.linkWordModel.findOne({ word, companyId });
      return {
        status: true,
        message: 'Link word read successfully',
        data: linkWord
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async findLinkParam(key: string, id: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const linkParam = await this.linkParamModel.findById(id);
      if (!linkParam) throw new NotFoundException('Link param not found');
      return {
        status: true,
        message: 'Link param read successfully',
        data: linkParam
      };
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  async update(id: string, dto: UpdateLinkDto) {
    try {
      const link = await this.linkModel.findByIdAndUpdate(
        id, dto, { new: true, runValidators: true });
      if (!link) throw new NotFoundException('Link not found');

      return {
        status: true,
        message: 'Link updated successfully',
        data: link
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateLinkParam(id: string, dto: UpdateLinkParamDto) {
    try {
      const linkParam = await this.linkParamModel.findByIdAndUpdate(
        id, dto, { new: true, runValidators: true });
      if (!linkParam) throw new NotFoundException('Link param not found');
      return {
        status: true,
        message: 'Link param updated successfully',
        data: linkParam
      };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException(error);
    }
  }

  async updateStatus(id: string, status: boolean) {
    try {
      let link = await this.linkModel.findById(id);
      if (!link) throw new NotFoundException('Link not found');

      await link.updateOne({ status });
      link = await this.linkModel.findById(id);

      return {
        status: true,
        message: 'Update success',
        data: link
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateLinkParamStatus(id: string, status: boolean) {
    try {
      let linkParam = await this.linkParamModel.findById(id);
      if (!linkParam) throw new NotFoundException('Link param not found');

      await linkParam.updateOne({ status });
      linkParam = await this.linkParamModel.findById(id);

      return {
        status: true,
        message: 'Link param status updated successfully',
        data: linkParam
      };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException(error);
    }
  }
}
