import Movie from "@/app/models/Movie";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { connectToDB } from "../../route";

export async function GET(req, { params }) {
  connectToDB();
  const cookieStore = cookies();
  const who = params.id;
  const username = cookieStore.get("username");
  const matches = await Movie.find({
    $and: [{ user_ids: username.value }, { user_ids: who }],
  });
  return NextResponse.json({ movie: matches });
}
