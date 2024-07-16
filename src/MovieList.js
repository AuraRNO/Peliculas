import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'b80d59c33d6d57ed9c7e3713f91c188a';
const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_MOVIES_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieList({ onMovieClick }) {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    axios.get(POPULAR_MOVIES_URL)
      .then(response => {
        setPeliculas(response.data.results);
      })
      .catch(error => {
        console.error('Error al obtener las películas populares:', error);
      });
  }, []);

  return (
    <div className="movie-list">
      {peliculas.map(pelicula => (
        <div key={pelicula.id} className="movie-item" onClick={() => onMovieClick(pelicula)}>
          <img src={`${IMAGE_BASE_URL}${pelicula.poster_path}`} alt={pelicula.title} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;

