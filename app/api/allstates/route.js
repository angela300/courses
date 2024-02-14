import connectMongoDB from "@/libs/mongodb";
import Allstate from "@/models/allstate";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const allstates = await Allstate.find();
    return NextResponse.json({ allstates });
}
  

