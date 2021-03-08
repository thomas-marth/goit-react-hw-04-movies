import React from "react";

import Spinner from "react-loader-spinner";
export default class Loader extends React.Component {
  render() {
    return <Spinner type="Rings" color="#00BFFF" height={300} width={300} />;
  }
}
