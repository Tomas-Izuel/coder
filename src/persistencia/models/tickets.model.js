import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  puchase_datetime: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  puchaser: {
    type: String,
    required: true,
  },
});
export const ticketModel = mongoose.model("Tickets", ticketSchema);
