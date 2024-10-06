"use client";

import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPw] = useState("");
  const router = useRouter();
  // function for login,
  // tell the next page if the user is Girl or boy
  // + redirect to matching page.

  const login = async (username, password) => {
    await axios.post("http://localhost:3000/api/login", {
      username,
      password,
    });
    // redirect to /matching
    router.push("/matching");
  };

  return (
    <div className="p-8 flex flex-col justify-center items-center h-screen w-screen">
      <h2 className="text-4xl font-bold">Login</h2>
      {/* <div className="flex gap-2 mt-5 md:flex-col">
        <button
          className=" bg-sky-500 p-4 font-semibold px-8 md:w-52 hover:scale-[1.02] duration-150 rounded-lg shadown-lg shadow-white"
          onClick={() => goToMatchingPage("boy")}
        >
          Boy
        </button>
        <button
          className=" bg-pink-500 p-4 font-semibold px-8 md:w-52 hover:scale-[1.02] duration-150 rounded-lg shadown-lg shadow-white"
          onClick={() => goToMatchingPage("girl")}
        >
          Girl
        </button>
      </div> */}

      {/* TODO - Login + call the Login to redirect to the next page */}
      <div className="flex flex-col gap-2 mt-5">
        <input
          placeholder="Username"
          type="text"
          className="rounded-lg p-2 outline-none text-black text-sm "
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          placeholder="Password"
          type="password"
          className="rounded-lg p-2 outline-none text-black text-sm "
          onChange={(e) => setPw(e.target.value)}
          value={password}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              login(username);
            }
          }}
        />
        <button
          onClick={() => login()}
          className="bg-pink-500 outline-3 outline outline-sky-500 hover:scale-105 duration-150 text-white font-semibold py-1 mt-2 rounded-full w-1/2 self-center"
        >
          GO
        </button>
      </div>
    </div>
  );
}
