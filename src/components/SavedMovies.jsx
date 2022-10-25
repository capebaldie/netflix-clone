import React, { useEffect, useState } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { UserAuthentication } from "../context/AuthContext";
import { database } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

export default function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [favourite, setFavourite] = useState(true);

  const { user } = UserAuthentication();
  useEffect(() => {
    onSnapshot(doc(database, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const userInfo = doc(database, "users", `${user?.email}`);

  //asynchronus function
  const deleteMovie = async (id) => {
    try {
      const result = movies.filter((movie) => movie.id !== id);
      await updateDoc(userInfo, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //normal func
  /* const deleteMovie = (id) => {
    const result = movies.filter((movie) => movie.id !== id);
    updateDoc(userInfo, {
      savedShows: result,
    });
  }; */
  return (
    <>
      {movies.map((movie) => {
        return (
          <div
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-105 ease-in duration-150 ml-1"
            key={movie?.id}
          >
            <img
              className="w-full h-auto block rounded ml-5"
              src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
              alt={movie?.id}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/30 opacity-0 hover:opacity-100 text-white ml-5">
              <div onClick={() => deleteMovie(movie?.id)}>
                {favourite ? (
                  <RiHeart3Fill className="absolute top-4 left-4 text-red-600" />
                ) : (
                  <RiHeart3Line className="absolute top-4 left-4 text-gray-300" />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
