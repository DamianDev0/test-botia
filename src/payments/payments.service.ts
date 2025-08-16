import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Model } from 'mongoose';
import { CreateSignatureDto } from './dto/create-signature.dto';
import { PlanType } from 'src/plans/schema/plan-type.schema';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel(PlanType.name)
    private readonly planTypeModel: Model<PlanType>,
  ) {}

  async signature(dto: CreateSignatureDto) {
    try {
      const { planTypeId } = dto;
      const planType = await this.planTypeModel.findById(planTypeId);
      if (!planType) throw new NotFoundException('Plan type not found');

      // Convertir precio a centavos
      const price = planType.price * 100;
      // Expiración en 1 minuto
      const expiration = new Date().getTime() + 60000;
      // Crear la firma
      const signature = `${uuidv4()}${price}COP${expiration}${process.env.WOMPY_SECRET}`;

      // Convertir a SHA-256
      const encondedText = new TextEncoder().encode(signature);
      const hashBuffer = await crypto.subtle.digest("SHA-256", encondedText);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")

      return {
        status: true,
        message: 'Signature created successfully',
        data: { hashHex },
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }

  async register() {
    return {
      status: true,
      message: 'Payment registered successfully',
    };
  }
}
