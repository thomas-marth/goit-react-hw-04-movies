import React, { Component } from "react";
import moviesAPI from "../services/movies-api";
import MoviesList from "../components/MovieList";

export default class HomePage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = () => {
    this.setState({ loading: true });
    moviesAPI
      .getTrending()
      .then((movies) => this.setState({ movies }))
      .catch((err) => this.setState({ error: err }))
      .finally(this.setState({ loading: false }));
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <h2>Trending today:</h2>
        <MoviesList movies={movies} />
      </>
    );
  }
}
