import { Request, Response } from 'express';

export default function (req: Request, res: Response) {
  const { pool, query } = req;
  pool.query(`SELECT * FROM leads LIMIT ${query.limit}`, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
}
