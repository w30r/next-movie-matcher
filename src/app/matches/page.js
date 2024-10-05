"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function getMatches() {
      try {
        const res = await axios.get("http://localhost:3000/api/matchedmovies");
        setMatches(res.data.matchedmovies);
        console.log("🚀 ~ matches ~ matches:", matches);
      } catch (error) {
        console.log(error);
      }
    }
    getMatches();
  }, []);

  return (
    <div className="p-8 text-white">
      <>
        <button
          onClick={() => window.history.back()}
          className="bg-gradient-to-tr from-sky-500 text-xs outline outline-white/80 hover:scale-105 duration-200 outline-1 to-pink-500 p-3 py-1 rounded-lg flex  justify-center items-center gap-2 mb-6"
        >
          <FaArrowAltCircleLeft />
          <p>Back to matching</p>
        </button>
      </>
      <>
        <h1 className="text-3xl">Matched</h1>
        <h1 className="text-5xl -mt-2">Movies! 🎉</h1>
      </>
      <>
        <div className="flex flex-wrap gap-4">
          {matches.map((movie) => (
            <div
              key={movie._id}
              className="flex flex-col justify-center items-center bg-white/10 w-72 h-96 rounded-lg p-4 hover:scale-105 duration-150"
            >
              <h1 className="text-xl">{movie.title}</h1>
              <p className="text-sm">{movie.year}</p>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}
