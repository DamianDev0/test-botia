import { Module } from '@nestjs/common';
import { TypeChannelsService } from './type-channels.service';
import { TypeChannelsController } from './type-channels.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Office } from 'src/offices/schemas/office.schema';
import { OfficeSchema } from 'src/offices/schemas/office.schema';
import { Company } from 'src/companies/schemas/company.schema';
import { CompanySchema } from 'src/companies/schemas/company.schema';
import { TypeChannel, TypeChannelSchema } from './schemas/type-channel.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [TypeChannelsController],
  providers: [TypeChannelsService],
  imports: [
    MongooseModule.forFeature([
      { name: Office.name, schema: OfficeSchema },
      { name: Company.name, schema: CompanySchema },
      { name: TypeChannel.name, schema: TypeChannelSchema }
    ]),
    AuthModule
  ]
})
export class TypeChannelsModule {}
