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
  if (!body.Series_Title) {
    return NextResponse.json({ message: "Title is required" }, { status: 400 });
  }

  const existingMovie = await MatchedMovie.findOne({
    Series_Title: body.Series_Title,
    userIDs: body.userIDs,
  });
  if (existingMovie) {
    return NextResponse.json(
      { message: "User has already liked this movie" },
      { status: 200 }
    );
  }

  const movie = await MatchedMovie.create(body);
  return NextResponse.json({
    message: "Saved a new movie",
    data: movie.Series_Title,
  });
}
