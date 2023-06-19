const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonationForm = new Schema(
  {
    beneficerId: {
      type: String,
      // required: true,
    },
    fullName: {
      type: String,
      // required: true,
    },
    phone: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
      lowercase: true,
    },
    city: {
      type: String,
      // required: true,
    },
    streetName: {
      type: String,
      // required: true,
    },
    buldingNumber: {
      type: String,
      // required: true,
    },
    TitleOfConsept: {
      type: String,
      // required: true,
    },
    DescriptionOfConsept: {
      type: String,
      // required: true,
    },
    Images: {
      type: [String],
      // required: true,
    },
    medicalReport: {
      type: [String],
      // required: true,
    },
    typeOfneeds: {
      type: String,
      // required: true,
    },
    totalPriceByAdmin: {
      type: Number,
      default: 0,
      // default: false,
      // required: true,
    },
    donorPaid: {
      type: Number,
      default: 0,
      // default: false,
      // required: true,
    },
    sumOfPaid: {
      type: Number,
      default: 0,
      // default: false,
      // required: true,
    },
    donorId: {
      type: [String],
      // default: false,
      // required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DonationForm", DonationForm);
