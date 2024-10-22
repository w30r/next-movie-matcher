"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function matches() {
  const [likes, setLikes] = useState([]);
  const [matchWith, setMatchWith] = useState("");
  const [matches, setMatches] = useState([]);
  const [movies, setMovies] = useState([]);

  // TODO Get liked movies
  async function getLikes() {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/movies/likes/${matchWith}`
      );
      setLikes(res.data.likes);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMatches() {
    const sapa = matchWith;
    const res = await axios.get(
      `http://localhost:3000/api/movies/match/${sapa}`
    );
    setMatches(res.data.movie);
    console.log("🚀 ~ getMatches ~ res.data:", res.data);
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
    getLikes();
    getMatches();
  }, [matchWith]);
  return (
    <div className="p-8 text-white bg-black h-screen">
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
        <h1 className="text-3xl">Liked</h1>
        <h1 className="text-5xl -mt-2">Movies! 🎉</h1>
      </>
      <div className="mt-6">
        Who you wanna match with?
        <div className="flex gap-4 mt-2">
          <Input
            value={matchWith}
            onChange={(e) => setMatchWith(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-[250px]"
          />
          <Button>Search</Button>
        </div>
      </div>
      <>
        <div className="flex flex-wrap gap-4">
          {matchWith.length <= 0 ? (
            likes.map((like, index) => (
              <motion.div
                key={like.row._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mt-10 flex flex-col justify-center items-center bg-white/10 w-72 h-auto rounded-lg p-4 hover:scale-105 duration-150"
              >
                <h1 className="text-xl">{like.row.Series_Title}</h1>
                <p className="text-sm">{like.row.Released_Year}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() =>
                    window.open(
                      createGoogleSearchURL(
                        like.row.Series_Title,
                        like.row.Released_Year
                      ),
                      "_blank"
                    )
                  }
                >
                  Search
                </motion.button>
              </motion.div>
            ))
          ) : (
            <div>
              <h1 className="mt-10">
                You and {matchWith} liked these movies! 👏🏻
              </h1>
              {matches.map((like, index) => (
                <motion.div
                  key={like.row._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mt-10 flex flex-col justify-center items-center bg-white/10 w-72 h-auto rounded-lg p-4 hover:scale-105 duration-150"
                >
                  <h1 className="text-xl">{like.row.Series_Title}</h1>
                  <p className="text-sm">{like.row.Released_Year}</p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() =>
                      window.open(
                        createGoogleSearchURL(
                          like.row.Series_Title,
                          like.row.Released_Year
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
          )}
        </div>
      </>
    </div>
  );
}
