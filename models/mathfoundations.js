import mongoose, { Schema } from "mongoose";

const mathfoundationsSchema = new Schema(
  {
    type: String,
    image: String,
    title: String,
    description: String,
  }
);

const Mathfoundation = mongoose.models.Mathfoundations || mongoose.model("Mathfoundations", mathfoundationsSchema);

export default Mathfoundation;