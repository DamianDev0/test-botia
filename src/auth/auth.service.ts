import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as admin from 'firebase-admin';
import { User } from 'src/users/schemas/user.schema';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async register(OAuthToken: string, dto: CreateUserDto) {
    try {
      // Comprobar que el token de firebase del usuario sea válido
      const { uid, email } = await admin.auth().verifyIdToken(OAuthToken);

      // Comprobar que el uid del usuario sea único
      let user = await this.userModel.findOne({ uid });
      if (user)
        throw new BadRequestException('This user already exist in database');

      user = new this.userModel({ ...dto, uid, email });
      await user.save();

      return {
        status: true,
        message: 'User created successfully',
        data: user
      };
    } catch (e) {
      if (e instanceof BadRequestException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async login(dto: LoginUserDto) {
    try {
      let user: any;
      const { OAuthToken } = dto;
      const { uid } = await admin.auth().verifyIdToken(OAuthToken);

      user = await this.userModel.findOne({ uid });
      if (!user) throw new NotFoundException('User not found');

      return {
        status: true,
        message: 'Authentication success',
        data: { token: this.jwtService.sign({ uid: user.uid }), user }
      };
    } catch (e) {
      if (e instanceof NotFoundException || e instanceof UnauthorizedException) throw e;
      throw new InternalServerErrorException(e);
    }
  }
}
