import React from "react";
import SavedMovies from "../components/SavedMovies";

export default function Account() {
  return (
    <>
      <div className="w-full">
        <img
          src="https://i.ibb.co/vXqDmnh/background.jpg"
          className="w-full h-[400px] object-cover mb-2"
          alt="background"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className=" w-full fixed h-2/4 top-0 left-0 bg-gradient-to-b from-black/80"></div>
        <div className="absolute top-[25%] pl-5">
          <h1 className="text-white text-3xl md:text-5xl font-bold ">
            Saved Movies
          </h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
}
