"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dataSource = new typeorm_1.DataSource({
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
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map