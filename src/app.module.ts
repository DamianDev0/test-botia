import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DomainModule } from './macrollantas/domain.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { CompaniesModule } from './companies/companies.module';
import { OfficesModule } from './offices/offices.module';
import { CommonsModule } from './commons/commons.module';
import { TypeChannelsModule } from './type-channels/type-channels.module';
import { LinksModule } from './links/links.module';
import { PlansModule } from './plans/plans.module';
import { PaymentsModule } from './payments/payments.module';
import { HelpModule } from './help/help.module';
import { SysModule } from './sys/sys.module';
import { InventoryModule } from './inventory/inventory.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('URI_MONGO'),
      }),
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('PG_HOST'),
        port: config.get<number>('PG_PORT'),
        username: config.get<string>('PG_USER'),
        password: config.get<string>('PG_PASSWORD'),
        database: config.get<string>('PG_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),

    DomainModule,
    // SgaModule,

    AuthModule,
    UserModule,
    CompaniesModule,
    OfficesModule,
    CommonsModule,
    TypeChannelsModule,
    LinksModule,
    PlansModule,
    PaymentsModule,
    HelpModule,
    SysModule,
    InventoryModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
