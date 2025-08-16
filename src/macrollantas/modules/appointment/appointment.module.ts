import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentsService } from './services/appointment.service';
import { Citas } from './entities/appointment.entity';
import { AppointmentsController } from './controllers/appointment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Citas])],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}
