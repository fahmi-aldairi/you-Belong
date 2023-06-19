const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema

const Donation = new Schema(
  {
    donorId: {
      type: String,
    },
    donorEmail: {
      type: String,
      lowercase: true,
    },
    donorName: {
      type: String,
    },
    donorPhone: {
      type: String,
    },
    amount: {
      type: String,
    },
    beneficerId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donation", Donation);
