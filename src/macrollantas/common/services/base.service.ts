/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseEntity, DeepPartial, Repository } from 'typeorm';

@Injectable()
export class GenericService<T extends BaseEntity> {
  protected readonly repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  async create(createDto: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(createDto);
    return await this.repository.save(entity);
  }

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async findOne(id: string): Promise<T> {
    const entity = await this.repository.findOne({ where: { id } as any });
    if (!entity) {
      throw new NotFoundException(`Entity with id ${id} not found`);
    }
    return entity;
  }

  async update(id: string, updateDto: DeepPartial<T>): Promise<T> {
    const entity = await this.findOne(id);
    this.repository.merge(entity, updateDto);
    return await this.repository.save(entity);
  }

  async delete(id: string): Promise<T> {
    const deletedItem = await this.repository.findOne({ where: { id } as any });
    if (!deletedItem) {
      throw new NotFoundException(`Entity with ID ${id} not found`);
    }
    await this.repository.softDelete(id);
    return deletedItem;
  }

  async save(entity: T): Promise<T> {
    return await this.repository.save(entity);
  }

  async findByEmail(email: string): Promise<T | null> {
    return this.repository.findOne({
      where: { email } as any,
    });
  }

  async count(): Promise<number> {
    return await this.repository.count();
  }
}
