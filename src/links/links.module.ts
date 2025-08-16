import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { Link, LinkSchema } from './schemas/link.schema';
import { AuthModule } from 'src/auth/auth.module';
import { Company, CompanySchema } from 'src/companies/schemas/company.schema';
import { Office, OfficeSchema } from 'src/offices/schemas/office.schema';
import { LinkParam, LinkParamSchema } from './schemas/link-param.schema';
import { LinkWord, LinkWordSchema } from './schemas/link-words.schema';

@Module({
  controllers: [LinksController],
  providers: [LinksService],
  imports: [
    MongooseModule.forFeature([
      { name: Link.name, schema: LinkSchema },
      { name: LinkParam.name, schema: LinkParamSchema },
      { name: Company.name, schema: CompanySchema },
      { name: Office.name, schema: OfficeSchema },
      { name: LinkWord.name, schema: LinkWordSchema }
    ]),
    AuthModule,
  ],
})
export class LinksModule {}
