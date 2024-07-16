import React from 'react';

function MovieDetails({ pelicula, onBack }) {
  return (
    <div className="movie-details">
      <button onClick={onBack}>Volver</button>
      <h2>{pelicula.title}</h2>
      <p>{pelicula.overview}</p>
    </div>
  );
}

export default MovieDetails;
