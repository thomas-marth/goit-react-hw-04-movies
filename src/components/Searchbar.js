import React, { Component } from "react";

export default class Searchbar extends Component {
  state = { value: "" };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value) {
      this.props.onSubmit(this.state.value);
    }
  };

  render() {
    return (
      <section className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            onChange={this.handleChange}
            autoFocus
            placeholder="Search movie..."
          />
        </form>
      </section>
    );
  }
}
