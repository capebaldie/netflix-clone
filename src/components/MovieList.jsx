import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import Movie from "./Movie";

const MovieList = ({ title, requests, id }) => {
  //requuest title and id are passed as props and defined originally in home component
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //requsets are defined in home for each category
    axios.get(requests).then((response) => {
      setMovies(response.data.results);
    });
  }, [requests]);

  const slideLeft = () => {
    //selecting the element
    const slider = document.getElementById("slide" + id);
    //scrolleft for scrolling left 400 plus
    slider.scrollLeft -= 600;
  };

  const slideRight = () => {
    //selecting the element
    const slider = document.getElementById("slide" + id);
    //only scrolls the slider based on the id given
    //scrolleft for scrolling left 400 minus
    slider.scrollLeft += 600;
  };

  return (
    <>
      <h2 className=" md:text-xl p-4 text-white">{title}</h2>
      <div className="realtive flex items-center group">
        <TfiArrowCircleLeft
          size={40}
          onClick={slideLeft}
          className="left-1  absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block text-slate-50"
        />
        <div
          id={"slide" + id} //we want a unique id inorder to scroll the correct silder
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </div>
        <TfiArrowCircleRight
          size={40}
          onClick={slideRight}
          className=" right-1  absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block text-slate-50"
        />
      </div>
    </>
  );
};

export default MovieList;
