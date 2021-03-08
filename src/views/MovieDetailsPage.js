import React, { Component, lazy, Suspense } from "react";
import { NavLink, Route } from "react-router-dom";
import routes from "../routes";
import moviesAPI from "../services/movies-api";
import MovieCard from "../components/MovieCard";
import Loader from "react-loader-spinner";
const asyncCast = lazy(() =>
  import("./Cast" /* webpackChunkName: "movie_cast" */)
);
const asyncReviews = lazy(() =>
  import("./Reviews" /* webpackChunkName: "movie_reviews" */)
);

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    genres: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    moviesAPI
      .fetchMovieDetails(movieId)
      .then((movie) => this.setState({ movie, genres: movie.genres }))
      .catch((err) => console.log(err));
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    // console.log(state)
    if (state && state.from) {
      this.props.history.push(state.from);
    }
  };

  render() {
    const { match } = this.props;
    const { state } = this.props.location;
    const { movie } = this.state;
    let stateFrom = state && state.from ? state.from : routes.home;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <br />
        {movie && (
          <MovieCard
            movie={movie}
            poster_path={movie.poster_path}
            genres={this.state.genres.map((genre) => genre.name).toString()}
          />
        )}

        <h3>Additional</h3>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: match.url + routes.cast,
                state: { from: stateFrom },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: match.url + routes.reviews,
                state: { from: stateFrom },
              }}
            >
              Rewies
            </NavLink>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Route path={`${match.path}${routes.cast}`} component={asyncCast} />
          <Route
            path={`${match.path}${routes.reviews}`}
            component={asyncReviews}
          />
        </Suspense>
      </>
    );
  }
}
