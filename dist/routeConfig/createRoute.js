"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contextMiddleware_1 = __importDefault(require("../middlewares/contextMiddleware"));
const validator_1 = require("../utils/validator");
const getRoute_1 = __importDefault(require("./getRoute"));
function createRoute(pool, routers = []) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const apiList = (_a = (yield (0, getRoute_1.default)())) !== null && _a !== void 0 ? _a : [];
        (_b = Object.keys(apiList)) === null || _b === void 0 ? void 0 : _b.forEach((path) => {
            var _a;
            const router = express_1.default.Router();
            (_a = apiList[path]) === null || _a === void 0 ? void 0 : _a.forEach((api) => __awaiter(this, void 0, void 0, function* () {
                let validator = [];
                if (api === null || api === void 0 ? void 0 : api.validator) {
                    const validatorApi = api.validator();
                    validator = validatorApi;
                }
                const middlewares = api.middlewares
                    ? [(0, contextMiddleware_1.default)(pool), ...api.middlewares]
                    : [(0, contextMiddleware_1.default)(pool)];
                router[api.medthod](api.path, middlewares, validator, validator_1.checkValidator, api.handler);
            }));
            routers.push({
                path: path,
                router: router
            });
        });
        return routers;
    });
}
exports.default = createRoute;
//# sourceMappingURL=createRoute.js.map