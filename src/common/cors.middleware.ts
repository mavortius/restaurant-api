import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction | Promise<MiddlewareFunction> {
    return (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    };
  }
}