import connectMongoDB from "@/libs/mongodb";
import Allstate from "@/models/allstate";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const allstate = await Allstate.findOne({ _id: id });
  return NextResponse.json({ allstate }, { status: 200 });
}
