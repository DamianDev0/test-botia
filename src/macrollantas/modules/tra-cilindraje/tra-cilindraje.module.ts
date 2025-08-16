import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraCilindraje } from './entities/tra-cilindraje.entity';
import { TraCilindrajeService } from './services/tra-cilindraje.service';
import { TraCilindrajeController } from './controllers/tra-cilindraje.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraCilindraje])],
  controllers: [TraCilindrajeController],
  providers: [TraCilindrajeService],
})
export class TraCilindrajeModule {}
