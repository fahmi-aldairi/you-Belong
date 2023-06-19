const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema

const Beneficer = new Schema(
  {
    role: {
      type: String,
      default: "beneficer",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      filename: String,
      // data: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Beneficer", Beneficer);
