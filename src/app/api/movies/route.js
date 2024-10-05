import Movie from "@/app/models/Movie";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("🍀 Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
  }
}

export async function GET() {
  connectToDB();
  const movies = await Movie.find();
  return NextResponse.json({ movies });
}

// export async function POST(req) {
//   connectToDB();
//   const body = await req.json();
//   const movie = await Movie.create({
//     _id: new mongoose.Types.ObjectId(),
//     ...body,
//   });
//   return NextResponse.json({ msg: "Created a new movie", data: movie });
// }
