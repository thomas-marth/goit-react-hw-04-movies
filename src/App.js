import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import Layout from "./components/Layout";
import routes from "./routes";

const HomePage = lazy(() => import("./views/HomePage"));
const MoviesPage = lazy(() => import("./views/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={routes.home} exact component={HomePage} />
            <Route path={routes.movies} exact component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}
