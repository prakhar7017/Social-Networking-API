"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const utils_1 = require("../utils/utils");
const config_1 = __importDefault(require("../config/config"));
// Middleware function for authenticating requests
const isAuthenticated = (req, res, next) => {
    var _a;
    console.log(req.headers);
    const token = req.headers.authorization || ((_a = req === null || req === void 0 ? void 0 : req.cookies) === null || _a === void 0 ? void 0 : _a.token);
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }
    const decodedToken = (0, utils_1.validateJwtToken)(token, config_1.default.server.jwtSecret || "jwtTOken");
    if (!decodedToken) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
    req.user = decodedToken; // Assign the decoded token to the user property of the request
    // console.log(req.user)
    next(); // Call the next middleware
};
exports.isAuthenticated = isAuthenticated;
