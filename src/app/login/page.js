"use client";

import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPw] = useState("");
  const router = useRouter();

  const loginfetch = async () => {
    await axios.post("http://localhost:3000/api/login", {
      username,
      password,
    });
    // redirect to /matching
    router.push(`/matching`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8, flex flex-col justify-center items-center h-screen w-screen"
    >
      <h1 className="text-5xl font-bold text-sky-500">MOVIE</h1>
      <h1 className="text-5xl font-bold text-pink-500 underline mb-3 -mt-3">
        MATCH!
      </h1>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl font-medium"
      >
        Who are you?
      </motion.h2>
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col gap-2 mt-5"
      >
        <input
          placeholder="Username"
          type="text"
          className="rounded-lg p-2 outline-none text-black text-sm "
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              loginfetch();
            }
          }}
        />
        {/* <input
          placeholder="Password"
          type="password"
          className="rounded-lg p-2 outline-none text-black text-sm "
          onChange={(e) => setPw(e.target.value)}
          value={password}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              loginfetch();
            }
          }}
        /> */}
        <button
          onClick={() => loginfetch(username, password)}
          className="bg-pink-500 outline-3 outline outline-sky-500 hover:scale-105 duration-150 text-white font-semibold py-1 mt-2 rounded-full w-1/2 self-center"
        >
          GO
        </button>
      </motion.div>
    </motion.div>
  );
}
