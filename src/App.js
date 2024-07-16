import React, { useState } from 'react';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import './App.css';

function App() {
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const handleMovieClick = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Películas Populares</h1>
        {peliculaSeleccionada ? (
          <MovieDetails pelicula={peliculaSeleccionada} onBack={() => setPeliculaSeleccionada(null)} />
        ) : (
          <MovieList onMovieClick={handleMovieClick} />
        )}
      </header>
    </div>
  );
}

export default App;
