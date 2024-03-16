"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.followRoute = exports.postRoutes = exports.userRoutes = void 0;
const user_router_1 = __importDefault(require("./user.router"));
exports.userRoutes = user_router_1.default;
const post_router_1 = __importDefault(require("./post.router"));
exports.postRoutes = post_router_1.default;
const follow_router_1 = __importDefault(require("./follow.router"));
exports.followRoute = follow_router_1.default;
