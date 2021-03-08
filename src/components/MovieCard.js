import React from "react";
import moviesAPI from "../services/movies-api";
import PropTypes from "prop-types";

const MovieCard = ({ movie, genres }) => (
  <>
    <img
      src={`${moviesAPI.BASE_IMG_URL}${movie.poster_path}`}
      alt={movie.title}
    />
    <h1>{movie.title}</h1>

    <h3>Genres</h3>
    <p>{genres}</p>
    <h3>Overview</h3>
    <p>{movie.overview}</p>
  </>
);

export default MovieCard;

MovieCard.propType = {
  movie: PropTypes.object,
  genres: PropTypes.string,
};
