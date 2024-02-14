import mongoose, { Schema } from "mongoose";

const sciencertSchema = new Schema(
  {
    type: String,
    image: String,
    title: String,
    description: String,
  }
);

const Sciencert = mongoose.models.Sciencert || mongoose.model("Sciencert", sciencertSchema);

export default Sciencert;
