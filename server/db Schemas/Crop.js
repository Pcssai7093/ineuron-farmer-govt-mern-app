const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    cropType: {
      type: String,
      required: true,
    },
    suitableSoil: {
      type: String,
      required: true,
    },
    suitableClimate: {
      type: String,
      required: true,
    },
    suitableSeason: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const cropData = mongoose.model("Crop", schema);
module.exports = cropData;
