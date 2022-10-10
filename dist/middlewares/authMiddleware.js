"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authMiddlewares() {
    return (req, res, next) => {
        // console.log(req.user);
        req.user = 'test';
        next();
    };
}
exports.default = authMiddlewares;
//# sourceMappingURL=authMiddleware.js.map