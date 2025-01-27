import React, { useState } from 'react';
import '../styles/MovieList.css';

const MovieList = () => {
  // array of movie objects
  const movies = [
    { title: 'Star TreK', genre: 'Sci-Fi', releaseYear: 2009 },
    { title: 'The Matrix', genre: 'Sci-Fi', releaseYear: 1999 },
    { title: 'Inception', genre: 'Sci-Fi', releaseYear: 2019 },
    { title: 'John Wick', genre: 'Action', releaseYear: 2014 },
    { title: 'Predator', genre: 'Action', releaseYear: 1987 },
    { title: 'Gladiator', genre: 'Action', releaseYear: 2000 },
    { title: 'Step Brothers', genre: 'Comedy', releaseYear: 2008 },
    { title: 'Wedding Crashers', genre: 'Comedy', releaseYear: 2005 },
    { title: 'Friday', genre: 'Comedy', releaseYear: 1995 }
  ];

  // select genre
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  // Get unique genre
  const uniqueGenres = ['All Genres', ...new Set(movies.map((movie) => movie.genre))];

  // Filter movies based on genre
  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  // Handle movie click
  const handleMovieClick = (title) => {
    alert(`You clicked on ${title}`);
  };

  return (
    <div className="movie-list">
      <h1>Movie List</h1>

      {/* Genre Filter Dropdown */}
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        className="genre-filter"
      >
        {uniqueGenres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/* Render movie list */}
      <div className="movies-container">
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
