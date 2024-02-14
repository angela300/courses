import mongoose, { Schema } from "mongoose";

const allstateSchema = new Schema(
  {
    type: String,
    image: String,
    title: String,
    description: String,
  }
);

const Allstate = mongoose.models.Allstate || mongoose.model("Allstate", allstateSchema);

export default Allstate;