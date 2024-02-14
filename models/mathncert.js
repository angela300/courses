import mongoose, { Schema } from "mongoose";

const mathncertSchema = new Schema(
  {
    type: String,
    image: String,
    title: String,
    description: String,
  }
);

const Mathncert = mongoose.models.Mathncert || mongoose.model("Mathncert", mathncertSchema);

export default Mathncert;