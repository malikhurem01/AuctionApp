import React from "react";
import classes from "./NavigationList.module.css";

const NavigationList = (props) => {
  return (
    <div className={classes.navBar_navigation}>
      <ul>
        <li>
          <a
            className={props.highlight === "home" ? classes.link_active : ""}
            href="/#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={props.highlight === "shop" ? classes.link_active : ""}
            href="/#"
          >
            Shop
          </a>
        </li>
        <li>
          <a
            className={props.highlight === "account" ? classes.link_active : ""}
            href="/#"
          >
            My Account
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationList;
