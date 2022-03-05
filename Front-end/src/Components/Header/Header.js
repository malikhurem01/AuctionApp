import React, { useContext } from 'react';
import classes from './Header.module.css';
import searchIcon from '../../Assets/searchIconSvg.svg';
import logo from '../../Assets/auction-app-logo.svg';

import SocialMediaIcons from '../UI/SocialMediaIcons';
import NavigationList from './Navigation/NavigationList';
import AuthContext from '../../Store/auth-context';
const Header = (props) => {
  const userContext = useContext(AuthContext);
  return (
    <React.Fragment>
      <div className={props.hidden ? classes.header_container : ' '}>
        <header>
          <div className={classes.header_bar}>
            <SocialMediaIcons animate={true} />
            {userContext.userDataState ? (
              <div className={classes.header_greeting}>
                Hi, &nbsp;
                {userContext.userDataState.first_name +
                  ' ' +
                  userContext.userDataState.last_name}
              </div>
            ) : (
              <div className={classes.login_buttons}>
                <span className={classes.sign_btn}>
                  <a href="/login">Login </a>
                </span>
                &emsp;
                <span className={classes.interText}>or</span>
                &emsp;
                <span className={classes.sign_btn}>
                  <a href="/register">Create an account </a>
                </span>
              </div>
            )}
          </div>
        </header>
        <nav>
          <div
            className={
              props.hidden
                ? classes.navBar_container_hidden
                : classes.navBar_container
            }
          >
            <div className={classes.navBar_logo}>
              <img src={logo} alt="Auction app logo" />
            </div>
            {props.hidden ? (
              ' '
            ) : (
              <React.Fragment>
                <div className={classes.navBar_searchBar}>
                  <input type="text" placeholder="Try enter: Shoes" />
                  <span className={classes.search_button}>
                    <img src={searchIcon} alt="search button" />
                  </span>
                </div>
                <NavigationList highlight={'home'} />
              </React.Fragment>
            )}
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
