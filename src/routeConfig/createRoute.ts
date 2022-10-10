import express from 'express';
import { ValidationChain } from 'express-validator';
import { Pool } from 'pg';
import contextMiddlewares from '../middlewares/contextMiddleware';
import { checkValidator } from '../utils/validator';
import getRoutes from './getRoute';
import { ApiRoute } from './interface/route';
export default async function createRoute(
  pool: Pool,
  routers: ApiRoute[] = []
) {
  const apiList = (await getRoutes()) ?? [];
  Object.keys(apiList)?.forEach((path) => {
    const router = express.Router();
    apiList[path]?.forEach(async (api) => {
      let validator: ValidationChain[] = [];
      if (api?.validator) {
        const validatorApi = api.validator();
        validator = validatorApi;
      }
      const middlewares = api.middlewares
        ? [contextMiddlewares(pool), ...api.middlewares]
        : [contextMiddlewares(pool)];
      router[api.medthod](
        api.path,
        middlewares,
        validator,
        checkValidator,
        api.handler
      );
    });
    routers.push({
      path: path,
      router: router
    });
  });
  return routers;
}
