import connectMongoDB from "@/libs/mongodb";
import Mathncert from "@/models/mathncert";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const mathncert = await Mathncert.findOne({ _id: id });
  return NextResponse.json({ mathncert }, { status: 200 });
}
