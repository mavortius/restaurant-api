import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { ItemsService } from './items/items.service';
import { ItemsController } from './items/items.controller';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';
import { CorsMiddleware } from './common/cors.middleware';

@Module({
  imports: [],
  controllers: [ ItemsController, ShoppingCartController ],
  providers: [ ItemsService ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(CorsMiddleware).forRoutes(
      { path: '*', method: RequestMethod.ALL },
    );
  }
}
