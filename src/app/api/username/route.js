import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const username = cookieStore.get("username");
  return new Response(username.value);
}
