import React from "react";

import Spinner from "react-loader-spinner";
export default class Loader extends React.Component {
  //other logic
  render() {
    return (
      <Spinner type="ThreeDots" color="#00BFFF" height={100} width={100} />
    );
  }
}
