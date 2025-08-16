import { Controller, Post, Body, Headers, Param, Patch, Get, Query } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @ApiOperation({ summary: 'Create a product' })
  @Post('product')
  create(
    @Headers('key') key: string,
    @Body() dto: CreateProductDto
  ) {
    return this.inventoryService.createProduct(dto, key);
  }

  @ApiOperation({ summary: 'Get all products' })
  @ApiQuery({ name: 'officeId', required: false })
  @ApiQuery({ name: 'limit', required: false })
  @Get('products')
  getAllProducts(
    @Headers('key') key: string,
    @Query('companyId') companyId: string,
    @Query('officeId') officeId: string,
    @Query('limit') limit: number
  ) {
    return this.inventoryService.getAllProducts(companyId, officeId, limit, key);
  }

  @ApiOperation({ summary: 'Get a product by value' })
  @Get('product')
  getOneProduct(
    @Headers('key') key: string,
    @Query('companyId') companyId: string,
    @Query('value') value: string
  ) {
    return this.inventoryService.getOneProduct(companyId, value, key);
  }

  @ApiOperation({ summary: 'Update a product' })
  @Patch('help/:id')
  update(
    @Param('id') id: string,
    @Headers('key') key: string,
    @Body() dto: UpdateProductDto
  ) {
    return this.inventoryService.updateProduct(id, dto, key);
  }
}
