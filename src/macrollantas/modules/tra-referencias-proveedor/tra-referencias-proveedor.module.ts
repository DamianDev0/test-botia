import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraReferenciasProveedor } from './entities/tra-referencias-proveedor.entity';
import { TraReferenciasProveedorService } from './services/tra-referencias-proveedor.service';
import { TraReferenciasProveedorController } from './controllers/tra-referencias-proveedor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TraReferenciasProveedor])],
  controllers: [TraReferenciasProveedorController],
  providers: [TraReferenciasProveedorService],
})
export class TraReferenciasProveedorModule {}
