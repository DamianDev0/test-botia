import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { Inventory, InventorySchema } from './schema/inventory.schema';
import { Company, CompanySchema } from 'src/companies/schemas/company.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService],
  imports: [
    MongooseModule.forFeature([
      { name: Inventory.name, schema: InventorySchema },
      { name: Company.name, schema: CompanySchema }
    ]),
    AuthModule
  ],
})
export class InventoryModule {}
