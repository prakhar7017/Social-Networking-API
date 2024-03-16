import  mongoose from "mongoose";
import config from "../config/config";
const dbName = config.mongodb.dbName || "socialo";
let mongoUri:string;

if (config.mongodb.uri !== undefined) {
    mongoUri = config.mongodb.uri;
}
if (config.server.env === "dev") {
    mongoose.set("debug", true);
}


export default async function () {
  try {
    await mongoose.connect(mongoUri);
    console.log(`MongoDB connected`);
  } catch (e) {
    console.log("Error connecting to mongoose: ", e);
  }
}