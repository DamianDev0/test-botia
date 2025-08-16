import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigFormulario } from './entities/config-formulario.entity';
import { ConfigFormularioService } from './services/config-formulario.service';
import { ConfigFormularioController } from './controllers/config-formulario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigFormulario])],
  controllers: [ConfigFormularioController],
  providers: [ConfigFormularioService],
})
export class ConfigFormularioModule {}
