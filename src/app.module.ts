import { Module } from '@nestjs/common';

import { ItemsService } from './items/items.service';
import { ItemsController } from './items/items.controller';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';

@Module({
  imports: [],
  controllers: [ItemsController, ShoppingCartController],
  providers: [ItemsService],
})
export class AppModule {}
