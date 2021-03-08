import React from "react";
import moviesAPI from "../services/movies-api";
import PropTypes from "prop-types";
const Actors = ({ actors }) => {
  return (
    <>
      <h2>Actors</h2>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <img
              src={`${moviesAPI.BASE_IMG_URL}${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.character}</p>
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Actors;

Actors.propTypes = {
  actors: PropTypes.object,
};
