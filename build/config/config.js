"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const env = process.env.NODE_ENV || "dev";
if (env === "dev") {
    require("dotenv").config({
        path: path_1.default.join(__dirname, "../../.env.dev"),
    });
}
exports.default = {
    server: {
        env,
        port: process.env.PORT || 9000,
        jwtSecret: process.env.JWT_SECRET_KEY,
    },
    mongodb: {
        uri: process.env.MONGODB_URI,
        dbName: process.env.MONGODB_DB_NAME,
    },
    cors: {
        origin: process.env.CLIENT_URL,
        credentials: true,
        preflightContinue: true,
    },
};
