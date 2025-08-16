import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles, User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import axios from 'axios';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>
  ) {}

  async findOne(id: string, user: User) {
    try {
      if (user.role !== 'Admin' && user.role === 'SuperAdmin' && user._id !== id)
        throw new UnauthorizedException('Unauthorized user');

      user = await this.userModel.findById(id);
      if (!user) throw new NotFoundException('User not found');

      return {
        status: true,
        message: 'Read success',
        data: user
      };
    } catch (e) {
      if (e instanceof NotFoundException ||
          e instanceof UnauthorizedException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async findByPhone(key: string, phone: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const user = await this.userModel.findOne({ phone });
      // if (!user) throw new NotFoundException('User not found');

      return {
        status: true,
        message: 'Read success',
        data: user
      };
    } catch (e) {
      if (e instanceof NotFoundException ||
          e instanceof UnauthorizedException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async update(uid: string, dto: UpdateUserDto) {
    try {
      const user = await this.userModel.findByIdAndUpdate(
        uid, dto, { new: true, runValidators: true } );
      if (!user) throw new NotFoundException('User not found');

      return {
        status: true,
        message: 'Update success',
        data: user
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateStatus(id: string, status: boolean) {
    try {
      let user = await this.userModel.findById(id);
      if (!user) throw new NotFoundException('User not found');

      await user.updateOne({ status });
      user = await this.userModel.findById(id);

      return {
        status: true,
        message: 'Update success',
        data: user
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateRole(id: string, role: Roles) {
    try {
      let user = await this.userModel.findById(id);
      if (!user) throw new NotFoundException('User not found');

      await user.updateOne({ role });
      user = await this.userModel.findById(id);

      return {
        status: true,
        message: 'Update success',
        data: user
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async updateRoleClient(clientId: string, role: string) {
    try {
      const client = await axios.patch(
        `${process.env.URL_CLIENTS_BOTIA}/clients/role/${clientId}`,
        { role },
        { headers: { key: process.env.KEY_CLIENTS_BOTIA }}
      );

      if (client.status !== 200)
        throw new InternalServerErrorException('Failed to update client role');

      return {
        status: true,
        message: 'Update success',
        data: client.data.data
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }
}
