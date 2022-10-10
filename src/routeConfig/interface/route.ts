import { NextFunction, Request, Response, Router } from 'express';
import { ValidationChain } from 'express-validator';
export enum ApiMedThodEnum {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export interface Api {
  path: string;
  handler(req: Request, res: Response): void;
  medthod: ApiMedThodEnum;
  middlewares: ((req: Request, res: Response, next: NextFunction) => void)[];
  validator: () => ValidationChain[];
}

export interface ApiRoute {
  path: string;
  router: Router;
}
