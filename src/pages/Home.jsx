import React from "react";
import { MainPage } from "../components/MainPage";
import MovieList from "../components/MovieList";
import requests from "../TmdbApi";

export default function Home() {
  return (
    <div>
      <MainPage />
      <MovieList id="1" title="Popular" requests={requests.requestPopular} />
      <MovieList id="2" title="Top Rated" requests={requests.requestTopRated} />
      <MovieList id="3" title="Trending" requests={requests.requestTrending} />
      <MovieList id="4" title="Upcoming" requests={requests.requestUpcoming} />
    </div>
  );
}
