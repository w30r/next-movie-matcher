import MatchedMovie from "@/app/models/MatchedMovies";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("🍀 Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
  }
}

export async function GET() {
  await connectToDB();
  const matchedmovies = await MatchedMovie.find();
  return NextResponse.json({ matchedmovies });
}

export async function POST(req) {
  await connectToDB();
  const body = await req.json();
  if (!body.title) {
    return NextResponse.json({ message: "Title is required" }, { status: 400 });
  }
  const movie = await MatchedMovie.create({ body });
  return NextResponse.json({ message: "New matched movie!", data: movie });
}
