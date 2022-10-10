"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
function registerEmailValidator() {
    return [(0, express_validator_1.query)('limit').notEmpty().withMessage('Limit is required')];
}
exports.default = registerEmailValidator;
//# sourceMappingURL=validator.js.map