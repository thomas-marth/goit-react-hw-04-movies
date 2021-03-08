import React, { Component } from "react";
// import routes from '../routes'
import { NavLink } from "react-router-dom";
import moviesAPI from "../services/movies-api";
import Searchbar from "../components/Searchbar";
import getQueryParams from "../utils/get-query-params";
import Loader from "../components/Loader";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      console.log("есть квери, можно фетчить");
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
    const { match } = this.props;
    return (
      <>
        <Searchbar onSubmit={this.handleChangeQuery} />
        <h1>Movies Page</h1>
        {loading && <Loader />}
        {movies && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <NavLink
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
