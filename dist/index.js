"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const createRoute_1 = __importDefault(require("./routeConfig/createRoute"));
// const Pool = require('pg').Pool;
const pg_1 = require("pg");
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
const pool = new pg_1.Pool({
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
    if (err)
        throw err;
});
(0, createRoute_1.default)(pool).then((routers) => {
    app.use(express_1.default.json());
    routers.forEach((router) => {
        app.use('/' + router.path, router.router);
    });
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`Application is running on port ${port}`);
    });
});
//# sourceMappingURL=index.js.map