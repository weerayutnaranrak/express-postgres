import express, { Express } from 'express';
import dotenv from 'dotenv';
import createRoute from './routeConfig/createRoute';
// const Pool = require('pg').Pool;

import { Pool } from 'pg';
import path from 'path';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const pool = new Pool({
  user: 'postgres',
  host: 'db.fjoyvwxjghfxhzyytbuy.supabase.co',
  database: 'postgres',
  password: 'XWs9jXUNEOtxRlAV',
  port: 5432
});
pool.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});
// callback - checkout a client
pool.connect((err) => {
  if (err) throw err;
});
createRoute(pool).then((routers) => {
  app.use(express.json());
  routers.forEach((router) => {
    app.use('/' + router.path, router.router);
  });
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Application is running on port ${port}`);
  });
});
