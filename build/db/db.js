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
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config/config"));
const dbName = config_1.default.mongodb.dbName || "socialo";
let mongoUri;
if (config_1.default.mongodb.uri !== undefined) {
    mongoUri = config_1.default.mongodb.uri;
}
if (config_1.default.server.env === "dev") {
    mongoose_1.default.set("debug", true);
}
function default_1() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(mongoUri);
            console.log(`MongoDB connected`);
        }
        catch (e) {
            console.log("Error connecting to mongoose: ", e);
        }
    });
}
exports.default = default_1;
