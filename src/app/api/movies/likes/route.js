import Movie from "@/app/models/Movie";
import { connectToDB } from "../route";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  connectToDB();
  const cookieStore = cookies();
  const username = cookieStore.get("username");
  const likes = await Movie.find({ user_ids: username.value });
  return NextResponse.json({ likes });
}
