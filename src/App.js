import React, { Component } from "react";

import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movies} exact component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Layout>
    );
  }
}
