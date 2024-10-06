"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { MdDone } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function MatchingPage() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  // const urlParams = new URLSearchParams(window.location.search);
  // const user = urlParams.get("user");

  async function getMovies() {
    try {
      const res = await axios.get("http://localhost:3000/api/movies");
      setMovies(res.data.movies);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="p-8 overflow-auto h-screen w-screen relative duration-150">
      <>
        <svg
          id="blobs"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10 blur-md top-1/2 right-1/2"
        >
          <path
            fill="#0ea5e9 "
            d="M62.3,-23.3C70.2,3.8,58.6,34.2,39.1,46.7C19.6,59.2,-7.7,53.7,-24.7,39.9C-41.8,26.1,-48.5,4.1,-42.7,-20.3C-36.9,-44.7,-18.4,-71.4,4.4,-72.8C27.3,-74.3,54.5,-50.4,62.3,-23.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10 blur-md top-36 left-3/4"
        >
          <path
            fill="#0ea5e9 "
            d="M33.4,-50.3C37.9,-42.7,32.5,-25.7,37.3,-11.9C42.2,2,57.5,12.8,57.8,20.9C58.1,29,43.5,34.4,31.4,41C19.3,47.6,9.6,55.5,0.5,54.8C-8.6,54.1,-17.2,44.9,-32.5,39.3C-47.8,33.6,-69.7,31.7,-72.8,23.4C-76,15,-60.4,0.2,-48.5,-9.5C-36.7,-19.1,-28.6,-23.7,-21.2,-30.4C-13.7,-37,-6.9,-45.7,3.8,-51C14.5,-56.2,28.9,-57.9,33.4,-50.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10 blur-md top-1/4 right-1/4"
        >
          <path
            fill="#ec4899"
            d="M62.3,-23.3C70.2,3.8,58.6,34.2,39.1,46.7C19.6,59.2,-7.7,53.7,-24.7,39.9C-41.8,26.1,-48.5,4.1,-42.7,-20.3C-36.9,-44.7,-18.4,-71.4,4.4,-72.8C27.3,-74.3,54.5,-50.4,62.3,-23.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10 blur-md top-1/2 left-1/4"
        >
          <path
            fill="#ec4899"
            d="M33.4,-50.3C37.9,-42.7,32.5,-25.7,37.3,-11.9C42.2,2,57.5,12.8,57.8,20.9C58.1,29,43.5,34.4,31.4,41C19.3,47.6,9.6,55.5,0.5,54.8C-8.6,54.1,-17.2,44.9,-32.5,39.3C-47.8,33.6,-69.7,31.7,-72.8,23.4C-76,15,-60.4,0.2,-48.5,-9.5C-36.7,-19.1,-28.6,-23.7,-21.2,-30.4C-13.7,-37,-6.9,-45.7,3.8,-51C14.5,-56.2,28.9,-57.9,33.4,-50.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10 blur-md top-3/4 right-1/4"
        >
          <path
            fill="#0ea5e9 "
            d="M62.3,-23.3C70.2,3.8,58.6,34.2,39.1,46.7C19.6,59.2,-7.7,53.7,-24.7,39.9C-41.8,26.1,-48.5,4.1,-42.7,-20.3C-36.9,-44.7,-18.4,-71.4,4.4,-72.8C27.3,-74.3,54.5,-50.4,62.3,-23.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10 blur-sm top-3/4 left-1/4 "
        >
          <path
            fill="#0ea5e9 "
            d="M33.4,-50.3C37.9,-42.7,32.5,-25.7,37.3,-11.9C42.2,2,57.5,12.8,57.8,20.9C58.1,29,43.5,34.4,31.4,41C19.3,47.6,9.6,55.5,0.5,54.8C-8.6,54.1,-17.2,44.9,-32.5,39.3C-47.8,33.6,-69.7,31.7,-72.8,23.4C-76,15,-60.4,0.2,-48.5,-9.5C-36.7,-19.1,-28.6,-23.7,-21.2,-30.4C-13.7,-37,-6.9,-45.7,3.8,-51C14.5,-56.2,28.9,-57.9,33.4,-50.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </>
      <div className="h-1/6">
        <h1 className="text-5xl font-bold text-sky-500">MOVIE</h1>
        <h1 className="text-5xl font-bold text-pink-500 underline -mt-3">
          MATCH!
        </h1>
        <h1>Hello, </h1>
        <h1>Start choose movies that you wanna watch!</h1>
      </div>
      <div className="flex flex-col items-center mt-2 text-black h-2/3 ">
        <div
          id="card"
          className="bg-black/60 text-white backdrop-blur-lg h-full w-full sm:w-2/3 md:w-1/2 p-4 rounded-lg shadow flex flex-col justify-center items-start"
        >
          <div
            id="buttons"
            className="flex justify-between mb-3 -mt-4 items-center w-full"
          >
            <button
              onClick={() =>
                setMovies((prevMovies) => [
                  ...prevMovies.slice(1),
                  prevMovies[0],
                ])
              }
              className="mt-4 outline outline-2 outline-white bg-pink-500 hover:bg-pink-700 duration-150 hover:scale-105 text-white font-bold p-4 text-lg rounded-full"
            >
              <RxCross2 />
            </button>
            <button
              onClick={() =>
                setMovies((prevMovies) => [
                  ...prevMovies.slice(1),
                  prevMovies[0],
                ])
              }
              className="mt-4 outline outline-2 outline-white bg-green-600 hover:bg-green-700 duration-150 hover:scale-105 text-white font-bold p-4 text-lg rounded-full"
            >
              <MdDone />
            </button>
          </div>
          <Image
            src={movies[0]?.row.Poster_Link}
            alt="poster"
            height={2000}
            width={2000}
            className="blur-0 self-center mb-6 rounded-lg shadow-md w-auto h-[200px]"
          />
          <h2 className="text-2xl font-bold leading-[0.9]">
            {movies.length === 0
              ? "Loading..."
              : `${movies[0]?.row.Series_Title} (${movies[0]?.row.Released_Year})`}
          </h2>
          <p className="text-sm opacity-80">By {movies[0]?.row.Director}</p>
          <p className="text-black rounded-lg mt-2 mb-2 bg-purple-500/50 outline outline-black/50 shadow-sm outline-1 font-semibold w-auto px-4  text-center">
            {movies[0]?.row.Genre}
          </p>
          <p className="text-sm opacity-80">
            Starred by {movies[0]?.row.Star1}, {movies[0]?.row.Star2},{" "}
            {movies[0]?.row.Star3}
          </p>
          <p className="text-lg mt-4 opacity-90 underline">Overview:</p>
          <p className="text-sm opacity-80 text-justify">
            {movies[0]?.row.Overview}
          </p>
        </div>
      </div>
      <div className="mt-4 z-20  flex justify-center h-1/6 py-8">
        <button
          onClick={() => router.push("/matches")}
          className="bg-gradient-to-tr from-sky-500 text-xl outline outline-black/80 text-black hover:scale-105 duration-200 outline-2 to-pink-500 p-3 py-1 rounded-lg"
        >
          View Matched Movies
        </button>
      </div>
    </div>
  );
}
