import Movie from "@/app/models/Movie";
import { connectToDB } from "../route";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

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

export async function PUT(req, { params }) {
  connectToDB();
  const id = params.id;
  const cookies = req.cookies;
  const username = cookies.get("username");
  const movie = await Movie.findOne({ _id: id });
  if (!movie) {
    return NextResponse.json({ msg: "Movie not found" }, { status: 404 });
  }

  movie.user_ids.push(username.value);
  movie.save();

  // const x = await Movie.findOneAndUpdate(
  //   { _id: id },
  //   {
  //     $push: { user_ids: username },
  //   },
  //   {
  //     new: true,
  //   }
  // );

  return NextResponse.json(
    {
      message: `Pushed username ${username.value} into ${movie.row.Series_Title}`,
    },
    { status: 200 }
  );
}
