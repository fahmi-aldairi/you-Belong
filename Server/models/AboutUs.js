const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutUs = new Schema(

    {
        about_title: {
            type: String,
            required: true
        },
        about_us: {
            type: String,
            required: true
        }

    },
    { timestamps: true }
);





module.exports = mongoose.model("AboutUs", AboutUs);