import { AdminGuard } from './../common/admin.guard';
import { Body, Controller, Get, Post, UsePipes, UseGuards } from '@nestjs/common';
import { ValidationPipe } from '../common/validation.pipe';
import { CreateItemDto } from './create-item.dto';
import { Item } from './item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  @UseGuards(new AdminGuard())
  @UsePipes(new ValidationPipe())
  async create(@Body() createItemDto: CreateItemDto) {
    this.itemsService.create(createItemDto);
  }
}
