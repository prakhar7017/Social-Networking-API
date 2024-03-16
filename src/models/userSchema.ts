import {Document, Schema, model,Types} from 'mongoose';
import mongoose from 'mongoose';
import { IFollow } from './followSchema';

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    date: Date;
    bio?:string;
    profilePic?:string;
    follows: IFollow['_id'];
}

const userSchema :mongoose.Schema<IUser>= new Schema<IUser>({
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
        type: Schema.Types.ObjectId,
        ref: 'Follow',
    },
},{toJSON:{
    transform(doc,ret){
        delete ret.__v;
        delete ret.password;
    }
},timestamps:true,});

export default model<IUser>('User', userSchema);