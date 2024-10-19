import Movie from "@/app/models/Movie";
import { connectToDB } from "../route";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function PUT(req, { params }) {
  connectToDB();
  const id = params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ msg: "Invalid id" }, { status: 400 });
  }

  const body = await req.json();
  console.log("🚀 ~ PUT ~ body:", body);

  const movie = await Movie.findByIdAndUpdate(
    id,
    { $push: { user_ids: body.username } },
    { new: true }
  );
  console.log("🚀 ~ PUT ~ movie:", movie);
  if (!movie) {
    return NextResponse.json({ msg: "Movie not found" }, { status: 404 });
  }

  return NextResponse.json({ msg: "Updated a movie", data: movie });
}

export async function GET(req, { params }) {
  connectToDB();
  const id = params.id;
  const movie = await Movie.findOne({ _id: id });
  if (!movie) {
    return NextResponse.json({ msg: "Movie not found" }, { status: 404 });
  }

  return NextResponse.json({
    msg: "Found it!",
    movie: movie,
  });
}
