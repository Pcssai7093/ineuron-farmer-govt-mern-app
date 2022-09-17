const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    launchedOn: {
      type: Date,
      required: true,
    },
    applyBy: {
      type: Date,
      required: true,
    },
    beneficiaries: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const schemeData = mongoose.model("Scheme", schema);
module.exports = schemeData;
