import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../TmdbApi";
export const MainPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  //const movie = Math.ceil(Math.random() * movies.length);
  const movie = movies[Math.ceil(Math.random() * movies.length)];

  return (
    <div className="w-full h-full">
      <div className="w-full h-[550px]">
        <div className="absolute w-full h-[550px] bg-gradient-to-t from-black"></div>
        <img
          className="w-full h-full object-cover cursor-pointer"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          //  using ?. solves the problem (optional chaining)
          alt="img"
        />
        <div className="absolute w-full top-[25%] p-2 md:p-4">
          <h1 className="text-3xl md:text-5xl font-semibold text-white max-w-2xl">
            {movie?.title}
          </h1>
          <div className="my-4">
            <button className="border rounded bg-white text-black border-gray-300 py-2 px-5 hover:bg-gray-300">
              PLAY
            </button>
            <button className="border rounded text-white border-gray-300 py-2 px-5 ml-4 hover:bg-slate-200 hover:text-black ease-in duration-150">
              WATCH LATER
            </button>
          </div>
          <p className=" text-gray-300 text-sm">
            Released : {movie?.release_date}
          </p>
          <p className=" text-gray-300 text-sm">
            Rating : {movie?.vote_average}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] text-white mt-2">
            {movie?.overview.slice(0, 200) + "..."}
            {/*  shortening the description using slice method */}
          </p>
        </div>
      </div>
    </div>
  );
};
