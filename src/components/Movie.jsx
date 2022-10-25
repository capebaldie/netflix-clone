import React, { useState } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { UserAuthentication } from "../context/AuthContext";
import { database } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ movie }) => {
  const [favourite, setFavourite] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuthentication();
  const userInfo = doc(database, "users", `${user?.email}`);
  const savedMovies = async () => {
    if (user?.email) {
      setFavourite(!favourite);
      setSaved(!saved);
      await updateDoc(userInfo, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("sign in to save movies");
    }
  };

  return (
    <div
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-105 ease-in duration-150 ml-1"
      key={movie.id}
    >
      <img
        className="w-full h-auto block rounded"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/30 opacity-0 hover:opacity-100 text-white ">
        <div onClick={savedMovies}>
          {favourite ? (
            <RiHeart3Fill className="absolute top-4 left-4 text-red-600" />
          ) : (
            <RiHeart3Line className="absolute top-4 left-4 text-gray-300" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
