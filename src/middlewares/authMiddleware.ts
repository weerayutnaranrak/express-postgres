import { Request, Response, NextFunction } from 'express';

export default function authMiddlewares() {
  return (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.user);
    req.user = 'test';
    next();
  };
}
