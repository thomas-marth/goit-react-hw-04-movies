import React, { Component } from "react";
import moviesAPI from "../services/movies-api";

import Loader from "../components/Loader";

export default class Cast extends Component {
  state = {
    actors: [],
    error: null,
    loading: false,
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    this.setState({ loading: true });
    // console.log(this.props.match.params.movieId)
    moviesAPI
      .getActors(id)
      .then((actors) => this.setState({ actors: actors.cast }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    const { actors, loading } = this.state;

    return (
      <>
        {actors && (
          <>
            <h2>Actors</h2>
            {loading && <Loader />}
            <ul>
              {actors.map((actor) => (
                <li key={actor.id}>
                  <img
                    src={
                      `${moviesAPI.BASE_IMG_URL}${actor.profile_path}` ||
                      "https://commons.hostos.cuny.edu/ctl/wp-content/uploads/sites/26/2019/02/Profile-no-Found.png"
                    }
                    alt={actor.name}
                  />
                  <p>{actor.name}</p>
                  <p>Character: {actor.character}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}
