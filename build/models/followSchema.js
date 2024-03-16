"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FollowSchema = new mongoose_1.Schema({
    _user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    following: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User',
            default: []
        }],
    followers: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User',
            default: []
        }],
}, { timestamps: true });
FollowSchema.index({ _user_id: 1, following: 1 });
FollowSchema.index({ _user_id: 1, followers: 1 });
exports.default = (0, mongoose_1.model)('Follow', FollowSchema);
