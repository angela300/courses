import connectMongoDB from "@/libs/mongodb";
import Sciencert from "@/models/sciencert";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const sciencert = await Sciencert.findOne({ _id: id });
  return NextResponse.json({ sciencert }, { status: 200 });
}
