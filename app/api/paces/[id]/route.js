import connectMongoDB from "@/libs/mongodb";
import Pace from "@/models/pace";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const pace = await Pace.findOne({ _id: id });
  return NextResponse.json({ pace }, { status: 200 });
}
