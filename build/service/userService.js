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
const repository_1 = require("../repository");
const utils_1 = require("../utils/utils");
const config_1 = __importDefault(require("../config/config"));
class UserService {
    constructor() {
        this.repository = new repository_1.userRepository();
    }
    signIn(userInput) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = userInput;
                const existingUser = yield this.repository.findUserByEmail(email);
                if (!existingUser) {
                    throw new Error("User does not exist");
                }
                const isPasswordValid = yield (0, utils_1.ValidatePassword)(existingUser.password, password, 10);
                if (!isPasswordValid) {
                    throw new Error("Invalid password");
                }
                const token = (0, utils_1.generateJwtToken)(existingUser._id, existingUser.email, config_1.default.server.jwtSecret || "jwtTOken", "1d");
                return yield (0, utils_1.FormateDate)({ id: existingUser._id, email: existingUser.email, token });
            }
            catch (error) {
                throw error;
            }
        });
    }
    signUp(userInput) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { email, username, password } = userInput;
                const existingUser = yield this.repository.findUserByEmail(email);
                if (existingUser) {
                    throw new Error("User already exists");
                }
                const hashedPassword = yield (0, utils_1.hashPassword)(password, 10);
                userInput.password = hashedPassword;
                const user = yield this.repository.createUser(userInput);
                if (!user) {
                    throw new Error("User not created");
                }
                return (0, utils_1.FormateDate)({ id: user._id, email: user.email });
            }
            catch (error) {
                return (0, utils_1.FormateDate)({ error });
            }
        });
    }
    getuserDetails(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.repository.findUserById(id);
                if (!user) {
                    throw new Error("User not found");
                }
                return (0, utils_1.FormateDate)({ user });
            }
            catch (e) {
                return (0, utils_1.FormateDate)({ error: e });
            }
        });
    }
    updateProfile(id, username, bio) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.repository.findUserById(id);
                if (!user) {
                    throw new Error("User not found");
                }
                user.username = username;
                user.bio = bio;
                yield user.save();
                return (0, utils_1.FormateDate)({ user });
            }
            catch (e) {
                return (0, utils_1.FormateDate)({ error: e });
            }
        });
    }
}
exports.default = UserService;
