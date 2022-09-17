const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    aadharNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);
const adminData = mongoose.model("Admin", schema);
module.exports = adminData;
