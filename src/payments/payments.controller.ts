import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreateSignatureDto } from './dto/create-signature.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Auth()
  @ApiOperation({ summary: 'Create signature' })
  @Post('signature')
  signature(@Body() createSignatureDto: CreateSignatureDto) {
    return this.paymentsService.signature(createSignatureDto);
  }

  @Auth()
  @ApiOperation({ summary: 'Register payment' })
  @Post('register')
  register() {
    return this.paymentsService.register();
  }
}
