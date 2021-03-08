import React, { Component } from "react";
import moviesAPI from "../services/movies-api";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    moviesAPI
      .getReviews(id)
      .then((reviews) => this.setState({ reviews: reviews.results }));
  }

  render() {
    const { reviews } = this.state;
    console.log(reviews);
    return (
      <>
        <h2>Reviews</h2>
        {reviews.length !== 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h5>{review.author}</h5>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no reviews...</p>
        )}
      </>
    );
  }
}
