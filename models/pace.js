import mongoose, { Schema } from "mongoose";

const paceSchema = new Schema(
  {
    type: String,
    image: String,
    title: String,
    description: String,
  }
);

const Pace = mongoose.models.Pace || mongoose.model("Pace", paceSchema);

export default Pace;