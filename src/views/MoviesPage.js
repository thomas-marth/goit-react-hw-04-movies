import React, { Component } from "react";
// import routes from '../routes'
import moviesAPI from "../services/movies-api";
import Searchbar from "../components/Searchbar";
import getQueryParams from "../utils/get-query-params";
import Loader from "../components/Loader";
import MoviesList from "../components/MovieList";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovie(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovie(nextQuery);
    }
  }

  handleChangeQuery = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  fetchMovie = (query) => {
    this.setState({ loading: true });
    moviesAPI
      .fetchMovieWithQuery(query)
      .then((movies) => this.setState({ movies }))
      .catch((err) => this.setState({ error: err }))
      .finally(this.setState({ loading: false }));
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <>
        <h2>Search movies</h2>
        <Searchbar onSubmit={this.handleChangeQuery} />
        {loading && <Loader />}
        <MoviesList movies={movies} />
      </>
    );
  }
}
