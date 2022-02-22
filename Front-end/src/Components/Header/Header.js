import React from "react";
import classes from "./Header.module.css";
import logo from "../../Assets/Logo.png";

import SocialMediaIcons from "../UI/SocialMediaIcons";
import SearchIconSvg from "../UI/SearchIconSvg";
import NavigationList from "./Navigation/NavigationList";

const Header = (props) => {
  let headerElement;

  if (props.isLoggedIn) {
    headerElement = <div className={classes.header_greeting}>Hi, John Doe</div>;
  } else {
    headerElement = (
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
    );
  }

  return (
    <React.Fragment>
      <header>
        <div className={classes.header_bar}>
          <SocialMediaIcons animate={true} />
          {headerElement}
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
          <NavigationList highlight={"home"} />
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
