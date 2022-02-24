import React from "react";
import classes from "./Header.module.css";
import searchIcon from "../../Assets/searchIconSvg.svg";
import logo from "../../Assets/auction-app-logo.svg";

import SocialMediaIcons from "../UI/SocialMediaIcons";
import NavigationList from "./Navigation/NavigationList";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <div className={classes.header_bar}>
          <SocialMediaIcons animate={true} />
          {props.isLoggedIn ? (
            <div className={classes.header_greeting}>Hi, John Doe</div>
          ) : (
            <div className={classes.login_buttons}>
              <span onClick={() => {}} className={classes.sign_btn}>
                Login
              </span>
              &emsp;
              <span className={classes.interText}>or</span>
              &emsp;
              <span onClick={() => {}} className={classes.sign_btn}>
                Create an account
              </span>
            </div>
          )}
        </div>
      </header>
      <nav>
        <div className={classes.navBar_container}>
          <div className={classes.navBar_logo}>
            <img src={logo} alt="Auction app logo" />
          </div>
          <div className={classes.navBar_searchBar}>
            <input type="text" placeholder="Try enter: Shoes" />
            <span className={classes.search_button}>
              <img src={searchIcon} alt="search button" />
            </span>
          </div>
          <NavigationList highlight={"home"} />
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
