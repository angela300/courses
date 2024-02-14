import connectMongoDB from "@/libs/mongodb";
import Mathmahashtra from "@/models/mathmahashtra";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const mathmahashtras = await Mathmahashtra.find();
    return NextResponse.json({ mathmahashtras });
}
  

