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
exports.FormateDate = exports.validateJwtToken = exports.hashPassword = exports.generateJwtToken = exports.ValidatePassword = exports.GenPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const GenPassword = (password, salt) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.hash(password, salt);
});
exports.GenPassword = GenPassword;
const ValidatePassword = (savedPass, enteredPass, salt) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield bcrypt_1.default.compare(enteredPass, savedPass));
});
exports.ValidatePassword = ValidatePassword;
const generateJwtToken = (id, email, secretKey, expiresIn) => {
    try {
        const payload = {
            _id: id,
            email
        };
        return jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn });
    }
    catch (error) {
        throw new Error('Error generating JWT token');
    }
};
exports.generateJwtToken = generateJwtToken;
const hashPassword = (password_1, ...args_1) => __awaiter(void 0, [password_1, ...args_1], void 0, function* (password, saltRounds = 10) {
    try {
        const salt = yield bcrypt_1.default.genSalt(saltRounds);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        return hashedPassword;
    }
    catch (error) {
        throw new Error('Error hashing password');
    }
});
exports.hashPassword = hashPassword;
const validateJwtToken = (token, secret) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        return decoded;
    }
    catch (error) {
        return null;
    }
};
exports.validateJwtToken = validateJwtToken;
const FormateDate = (data) => {
    if (data) {
        return { data };
    }
    else {
        throw new Error("No Data Found");
    }
};
exports.FormateDate = FormateDate;
