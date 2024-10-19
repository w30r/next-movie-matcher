import Movie from "@/app/models/Movie";
import { connectToDB } from "../../route";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  connectToDB();

  const movie = await Movie.findById(params.id).catch((err) => {
    console.log(err);
    return null;
  });
  return NextResponse.json(movie);
}

export async function PATCH(req, { params }) {
  connectToDB();

  const movie = await Movie.findOneAndUpdate(
    { _id: params.id },
    {
      // $set: {
      user_ids: {
        $cond: {
          if: { $exists: "$user_ids" },
          then: { $addToSet: { user_ids: [params.userid] } },
          else: [params.userid],
        },
      },
      // },
    },
    {
      new: true, // Return the updated document
    }
  );
  return NextResponse.json({ msg: "Updated a movie", data: movie });
}

