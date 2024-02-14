import connectMongoDB from "@/libs/mongodb";
import Sciencert from "@/models/sciencert";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const sciencerts = await Sciencert.find();
    return NextResponse.json({ sciencerts });
}
  

