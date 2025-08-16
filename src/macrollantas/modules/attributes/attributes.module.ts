import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributesService } from './services/attributes.service';
import { Atributos } from './entities/attributes.entity';
import { AttributesController } from './controllers/attributes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Atributos])],
  controllers: [AttributesController],
  providers: [AttributesService],
})
export class AttributesModule {}
