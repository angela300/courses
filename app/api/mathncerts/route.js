import connectMongoDB from "@/libs/mongodb";
import Mathncert from "@/models/mathncert";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const mathncerts = await Mathncert.find();
    return NextResponse.json({ mathncerts });
}
  

