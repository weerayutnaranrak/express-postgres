import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'db.fjoyvwxjghfxhzyytbuy.supabase.co',
  port: 5432,
  username: 'postgres',
  password: 'XWs9jXUNEOtxRlAV',
  database: 'postgres',
  entities: [__dirname + '/../entities/*{.js,.ts}'],
  logging: true,
  synchronize: false,
  migrations: [__dirname + '/migrations/*{.js,.ts}'],
  migrationsRun: false
});

export default dataSource;
