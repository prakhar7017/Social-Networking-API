"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    bio: {
        type: String,
        default: "",
    },
    profilePic: {
        type: String,
        default: "",
    },
    follows: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Follow',
    },
}, { toJSON: {
        transform(doc, ret) {
            delete ret.__v;
            delete ret.password;
        }
    }, timestamps: true, });
exports.default = (0, mongoose_1.model)('User', userSchema);
