import connectMongoDB from "@/libs/mongodb";
import Mathfoundation from "@/models/mathfoundations";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const mathfoundations = await Mathfoundation.find();
    return NextResponse.json({ mathfoundations });
}
  

