"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function contextMiddlewares(pool) {
    return (req, res, next) => {
        // console.log(req.user);
        req.pool = pool;
        next();
    };
}
exports.default = contextMiddlewares;
//# sourceMappingURL=contextMiddleware.js.map