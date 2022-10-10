import { Request, Response, NextFunction } from 'express';
import { Pool } from 'pg';

export default function contextMiddlewares(pool: Pool) {
  return (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.user);
    req.pool = pool;
    next();
  };
}
