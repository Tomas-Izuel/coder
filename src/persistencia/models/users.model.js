import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  role: {
    type: String,
    default: "user",
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Carts",
  },
});

export const userModel = mongoose.model("Users", usersSchema);
