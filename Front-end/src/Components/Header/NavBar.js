import React from "react";
import classes from "./NavBar.module.css";
import logo from "../../Assets/Logo.png";

import SocialMediaIcons from "../UI/SocialMediaIcons";
import SearchIconSvg from "../UI/SearchIconSvg";

const NavBar = () => {
  return (
    <React.Fragment>
      <header>
        <div className={classes.header_bar}>
          <div>
            <SocialMediaIcons animate={true} />
          </div>
          <div className={classes.header_greeting}>Hi, John Doe</div>
        </div>
      </header>
      <nav>
        <div className={classes.navBar_container}>
          <div className={classes.navBar_logo}>
            <img src={logo} alt="Auction app logo" />
          </div>
          <div className={classes.navBar_searchBar}>
            <input type="text" placeholder="Try enter: Shoes" />
            <SearchIconSvg />
          </div>
          <div className={classes.navBar_navigation}>
            <ul>
              <li>
                <a className={classes.link_active} href="/#">
                  Home
                </a>
              </li>
              <li>
                <a href="/#">Shop</a>
              </li>
              <li>
                <a href="/#">My Account</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
