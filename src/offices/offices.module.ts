import { Module } from '@nestjs/common';
import { OfficesService } from './offices.service';
import { OfficesController } from './offices.controller';
import { CompanySchema } from 'src/companies/schemas/company.schema';
import { Company } from 'src/companies/schemas/company.schema';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Office, OfficeSchema } from './schemas/office.schema';

@Module({
  controllers: [OfficesController],
  providers: [OfficesService],
  imports: [
    MongooseModule.forFeature([
      { name: Office.name, schema: OfficeSchema },
      { name: Company.name, schema: CompanySchema }
      // { name: User.name, schema: UserSchema }
    ]),
    AuthModule
  ]
})
export class OfficesModule {}
