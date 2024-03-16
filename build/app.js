"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = __importDefault(require("./db/db"));
const http_errors_1 = __importDefault(require("http-errors"));
const config_1 = __importDefault(require("./config/config"));
const router_1 = require("./router");
class Express {
    constructor() {
        this.app = (0, express_1.default)();
        this.server = http_1.default.createServer(this.app);
        (0, db_1.default)();
        this.initializeMiddlewares();
    }
    initializeMiddlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(router_1.userRoutes);
        this.app.use(router_1.postRoutes);
        this.app.use(router_1.followRoute);
        this.app.use((req, res, next) => {
            next((0, http_errors_1.default)(404));
        });
    }
    listen() {
        this.server.listen(config_1.default.server.port, () => {
            console.log(`Server running on port ${config_1.default.server.port}`);
        });
    }
}
exports.default = Express;
