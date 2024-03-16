import { Document, isValidObjectId, model, Schema } from "mongoose";
import { IUser } from "./userSchema";

export interface IPost extends Document {
  _author_id: IUser["_id"];
  title: string;
  description: string;
  isEdited: boolean;
  createdAt: Date;
  updatedAt: Date;
  image?: string;
}

const PostSchema = new Schema(
  {
    _author_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    description: {
      type: String,
      default: "",
    },
    isEdited: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    image: {
      type: String,
      default: undefined,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { getters: true, virtuals: true },
  }
);
PostSchema.virtual("author", {
  ref: "User",
  localField: "_author_id",
  foreignField: "_id",
  justOne: true,
});

export default model<IPost>("PostModel", PostSchema);
