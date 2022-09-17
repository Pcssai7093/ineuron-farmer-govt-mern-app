const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    isApproved: {
      type: String,
      default: "not approved",
    },
    scheme: { type: mongoose.Schema.Types.ObjectId, ref: "Schema" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
const applicationData = mongoose.model("Application", schema);
module.exports = applicationData;
