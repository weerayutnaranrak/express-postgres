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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const lodash_1 = require("lodash");
function getRoutes() {
    return __awaiter(this, void 0, void 0, function* () {
        const dirPath = path_1.default.join(__dirname, '../routes');
        const data = {};
        fs_1.default.readdirSync(dirPath).forEach((route) => __awaiter(this, void 0, void 0, function* () {
            const apiData = [];
            const filePath = path_1.default.join(dirPath, route);
            fs_1.default.readdirSync(filePath).forEach((fileApi) => __awaiter(this, void 0, void 0, function* () {
                const filePathApi = path_1.default.join(filePath, fileApi, '/api');
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                const fileData = require(filePathApi).default;
                if (!(0, lodash_1.isEmpty)(fileData)) {
                    apiData.push(fileData);
                }
            }));
            data[route] = apiData;
        }));
        return data;
    });
}
exports.default = getRoutes;
//# sourceMappingURL=getRoute.js.map