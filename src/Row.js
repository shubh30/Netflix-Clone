import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // It will append the unique end point url to the base url ("https://api.themoviedb.org/3" + '/discover/tv?api_key=${API_KEY}&with_networks=213')
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      {/* container -> posters */}
      <div className="row__posters">
        {/* Posters */}
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className="row__poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>

      {/*  */}
    </div>
  );
}

export default Row;
