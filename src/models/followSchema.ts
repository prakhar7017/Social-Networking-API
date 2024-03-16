import { Document, model, Schema } from "mongoose";
import { IUser } from "./userSchema";

export interface IFollow extends Document {
    _user_id: IUser['_id'];
    following: Array<IUser['_id']>;
    followers: Array<IUser['_id']>;
}

const FollowSchema = new Schema<IFollow>({
    _user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: []
    }],
}, { timestamps: true });

FollowSchema.index({ _user_id: 1, following: 1 });
FollowSchema.index({ _user_id: 1, followers: 1 });

export default model<IFollow>('Follow', FollowSchema);
