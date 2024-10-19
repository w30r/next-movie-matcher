"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function matches() {
  const [matches, setMatches] = useState([]);

  async function getMatches() {
    try {
      const res = await axios.get("http://localhost:3000/api/markedmovies");
      setMatches(res.data.matchedmovies);
    } catch (error) {
      console.log(error);
    }
  }

  function createGoogleSearchURL(sentence, year) {
    // Encode the sentence to make it URL-safe
    const string = sentence + " " + year;
    const query = encodeURIComponent(string);
    // Create the Google search URL
    const googleSearchURL = `https://www.google.com/search?q=${query}`;
    return googleSearchURL;
  }

  useEffect(() => {
    getMatches();
  }, []);

  console.log("🚀 ~ matches ~ matches:", matches);
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
          {matches.map((movie, index) => (
            <motion.div
              key={movie._id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mt-10 flex flex-col justify-center items-center bg-white/10 w-72 h-auto rounded-lg p-4 hover:scale-105 duration-150"
            >
              <h1 className="text-xl">{movie.Series_Title}</h1>
              <p className="text-sm">{movie.Released_Year}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  window.open(
                    createGoogleSearchURL(
                      movie.Series_Title,
                      movie.Released_Year
                    ),
                    "_blank"
                  )
                }
              >
                Search
              </motion.button>
            </motion.div>
          ))}
        </div>
      </>
    </div>
  );
}
