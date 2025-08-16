import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigDocumento } from './entities/config-documento.entity';
import { ConfigDocumentoService } from './services/config-documento.service';
import { ConfigDocumentoController } from './controllers/config-documento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigDocumento])],
  controllers: [ConfigDocumentoController],
  providers: [ConfigDocumentoService],
})
export class ConfigDocumentoModule {}
