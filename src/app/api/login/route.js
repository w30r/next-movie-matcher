import jwt from "jsonwebtoken";

export async function POST(req) {
  const { username } = await req.json();
  const accessToken = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return new Response(JSON.stringify({ accessToken }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `username=${username}; Max-Age=3600; HttpOnly; Secure; SameSite=Strict`,
    },
  });
}
// auth middleware
export default function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
