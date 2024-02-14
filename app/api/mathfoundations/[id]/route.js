import connectMongoDB from "@/libs/mongodb";
import Mathfoundation from "@/models/mathfoundations";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const mathfoundation = await Mathfoundation.findOne({ _id: id });
  return NextResponse.json({ mathfoundation }, { status: 200 });
}
