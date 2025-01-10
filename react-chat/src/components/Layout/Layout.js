import React from "react";
import Header from "../common/Header/Header";
import Navbar from "../common/Navbar/Navbar";

import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.Container}>
      <main className={classes.Layout}>
        <Navbar />
        <div className={classes.Main}>
          <Header />
          <hr />
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
