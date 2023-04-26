import mongoose from "mongoose";
import config from "../config.js";

const URI = config.MONGOURL;

try {
  await mongoose.connect(URI);
  console.log(
    "\u001b[" + 36 + "m" + `[mongoose] connected to Mongo Atlas✅` + "\u001b[0m"
  );
} catch (error) {
  console.log(`MongoDB connection error: ${err}`);
}
