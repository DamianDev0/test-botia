import {
  Post,
  Get,
  Patch,
  Body,
  Headers,
  Query,
  Type,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BaseEntity, DeepPartial } from 'typeorm';
import { BaseAuthenticatedService } from '../services/base-authenticated.service';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export function BaseController<
  T extends BaseEntity,
  CreateDto extends DeepPartial<T>,
  UpdateDto extends DeepPartial<T>,
>(
  resourceName: string,
  createDtoClass: Type<CreateDto>,
  updateDtoClass: Type<UpdateDto>,
) {
  @ApiTags(resourceName)
  abstract class AbstractBaseController {
    constructor(public readonly service: BaseAuthenticatedService<T>) {}

    @Post()
    @ApiBody({ type: createDtoClass })
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async create(@Body() dto: CreateDto, @Headers('key') key: string) {
      return this.service.createWithAuth(dto, key, resourceName);
    }

    @Get()
    async getAll(@Headers('key') key: string) {
      return this.service.findAllWithAuth(key, resourceName);
    }

    @Get('/by-id')
    async getOne(@Headers('key') key: string, @Query('id') id: string) {
      return this.service.findOneWithAuth(id, key, resourceName);
    }

    @Patch()
    @ApiBody({ type: updateDtoClass })
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async update(
      @Headers('key') key: string,
      @Query('id') id: string,
      @Body() dto: UpdateDto,
    ) {
      return this.service.updateWithAuth(
        id,
        dto as unknown as QueryDeepPartialEntity<T>,
        key,
        resourceName,
      );
    }
  }

  return AbstractBaseController;
}
