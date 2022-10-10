import { Pool } from 'pg';

export {};

declare global {
  namespace Express {
    export interface Request {
      language?: string;
      user?: string;
      pool: Pool;
    }
  }
}
