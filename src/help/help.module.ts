import { Module } from '@nestjs/common';
import { HelpService } from './help.service';
import { HelpController } from './help.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Help, HelpSchema } from './schemas/help.schema';
import { CompanySchema } from 'src/companies/schemas/company.schema';
import { Company } from 'src/companies/schemas/company.schema';
import { HelpDetSchema } from './schemas/help-det.schema';
import { HelpDet } from './schemas/help-det.schema';

@Module({
  controllers: [HelpController],
  providers: [HelpService],
  imports: [
    MongooseModule.forFeature([
      { name: Help.name, schema: HelpSchema },
      { name: HelpDet.name, schema: HelpDetSchema },
      { name: Company.name, schema: CompanySchema },
    ])
  ]
})
export class HelpModule {}
