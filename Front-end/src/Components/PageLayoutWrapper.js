import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import classes from "./style.module.css";

const PageLayoutWrapper = (props) => {
  return (
    <React.Fragment>
      <Header isLoggedIn={props.isLoggedIn} />
      <div className={classes.marginClass}>{props.children}</div>
      <Footer isLoggedIn={props.isLoggedIn} />
    </React.Fragment>
  );
};

export default PageLayoutWrapper;
