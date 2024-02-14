import mongoose, { Schema } from "mongoose";

const mathmahashtraSchema = new Schema(
  {
    type: String,
    image: String,
    title: String,
    description: String,
  }
);

const Mathmahashtra = mongoose.models.Mathmahashtra || mongoose.model("Mathmahashtra", mathmahashtraSchema);

export default Mathmahashtra;