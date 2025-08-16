import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Company } from 'src/companies/schemas/company.schema';
import { Inventory } from './schema/inventory.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(Inventory.name)
    private inventoryModel: Model<Inventory>,
    @InjectModel(Company.name)
    private companyModel: Model<Company>
  ) {}

  // Función para normalizar texto eliminando tildes
  private normalizeText(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  async createProduct(dto: CreateProductDto, key: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const product = await this.inventoryModel.create(dto);
      return {
        status: true,
        message: 'Product created successfully',
        data: product
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getAllProducts(companyId: string, officeId: string, limit: number, key: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      let products = [];
      if (companyId && officeId) {
        products = await this.inventoryModel.find({
          companyId, officeId }).limit(limit);
      } else {
        products = await this.inventoryModel.find({
          companyId }).limit(limit);
      }

      return {
        status: true,
        message: 'Products fetched successfully',
        data: products
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getOneProduct(companyId: string, value: string, key: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const company = await this.companyModel.findById(companyId);
      if (!company) throw new NotFoundException('Company not found');

      let products = [];
      if (value.includes('sku')) {
        const sku = value.split('-')[1];
        products = await this.inventoryModel
          .find({ sku: { $regex: sku, $options: 'i' } })
          .collation({ locale: 'es', strength: 1 });
      } else {
        const searchParts = value.split('-');
        const descriptionPart = searchParts[0]?.trim();
        const referencePart = searchParts[1]?.trim();
        const query: any = { companyId };

        if (descriptionPart) {
          // Lista de palabras comunes a ignorar
          const stopWords = ['de', 'del', 'la', 'las', 'el', 'los', 'y', 'o', 'para', 'por', 'con', 'sin', 'en', 'a', 'al', 'ante', 'bajo', 'cabe', 'con', 'contra', 'desde', 'durante', 'entre', 'hacia', 'hasta', 'mediante', 'según', 'so', 'sobre', 'tras'];
          const descriptionWords = descriptionPart
            .split(/\s+/)
            .filter(word => word.length > 0 && !stopWords.includes(word.toLowerCase()))
            .map(word => this.normalizeText(word));
          console.log('Palabras de búsqueda (normalizadas):', descriptionWords);

          query.description = {
            $regex: descriptionWords.map(word => `(?=.*${word})`).join(''),
            $options: 'i'
          };
        }
        if (referencePart)
          query.reference = { $regex: this.normalizeText(referencePart), $options: 'i' };

        products = await this.inventoryModel
          .find(query)
          .collation({ locale: 'es', strength: 1 });
      }

      return {
        status: true,
        message: 'Product fetched successfully',
        data: products
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateProduct(id: string, dto: UpdateProductDto, key: string) {
    if (key != process.env.KEY) throw new UnauthorizedException();
    try {
      const product = await this.inventoryModel
        .findByIdAndUpdate(id, dto, { new: true });
      if (!product) throw new NotFoundException('Product not found');
      return {
        status: true,
        message: 'Product updated successfully',
        data: product
      };
    } catch (e) {
      if (e instanceof NotFoundException) throw e;
      throw new InternalServerErrorException(e);
    }
  }
}
