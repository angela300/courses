import connectMongoDB from "@/libs/mongodb";
import Pace from "@/models/pace";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const paces = await Pace.find();
    return NextResponse.json({ paces });
}
  

