"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("../../../routeConfig/interface/route");
const handler_1 = __importDefault(require("./handler"));
const validator_1 = __importDefault(require("./validator"));
exports.default = {
    path: '',
    medthod: route_1.ApiMedThodEnum.GET,
    middlewares: [],
    validator: validator_1.default,
    handler: handler_1.default
};
//# sourceMappingURL=api.js.map