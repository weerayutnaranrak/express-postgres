"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValidator = void 0;
const express_validator_1 = require("express-validator");
const resultsValidator = (req) => {
    const messages = [];
    if (!(0, express_validator_1.validationResult)(req).isEmpty()) {
        const errors = (0, express_validator_1.validationResult)(req).array();
        for (const i of errors) {
            messages.push(i);
        }
    }
    return messages;
};
const checkValidator = (req, res, next) => {
    const errors = resultsValidator(req);
    if (errors.length > 0) {
        return res.status(400).json({
            method: req.method,
            status: res.statusCode,
            error: errors
        });
    }
    next();
};
exports.checkValidator = checkValidator;
//# sourceMappingURL=validator.js.map