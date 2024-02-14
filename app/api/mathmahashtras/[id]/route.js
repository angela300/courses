import connectMongoDB from "@/libs/mongodb";
import Mathmahashtra from "@/models/mathmahashtra";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const mathmahashtra = await Mathmahashtra.findOne({ _id: id });
  return NextResponse.json({ mathmahashtra }, { status: 200 });
}
