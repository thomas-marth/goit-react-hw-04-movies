import React from "react";
import Appbar from "./Appbar";

const styles = {
  maxWidth: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 12,
  paddingRight: 12,
};

const Layout = ({ children }) => (
  <div style={styles}>
    <Appbar />
    {children}
  </div>
);

export default Layout;
