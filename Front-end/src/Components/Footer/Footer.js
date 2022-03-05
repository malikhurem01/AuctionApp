import React from "react";
import classes from "./Footer.module.css";
import SocialMediaIcons from "../UI/SocialMediaIcons";
import arrow from "../../Assets/arrowRight.svg";
const Footer = (props) => {
  let subscribeElement = (
    <div className={classes.footer_subscribe}>
      <p>Newsletter</p>
      <ul>
        <li>
          Enter your email address and get notified about
          <br />
          new products. We hate spam!
        </li>
        <li>
          <input type="email" placeholder="Your Email Address" />
          <a href="/#" className={classes.btn}>
            GO{" "}
            <div className={classes.arrow}>
              <img src={arrow} alt="arrow" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
  return (
    <React.Fragment>
      <footer>
        <div className={classes.footerContainer}>
          <div className={classes.footer_about}>
            <p>Auction</p>
            <ul>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms and Conditions</a>
              </li>
              <li>
                <a href="/privacy-and-policy">Privacy and Policy</a>
              </li>
            </ul>
          </div>
          <div className={classes.footer_get_in_touch}>
            <p>Get in touch</p>
            <ul>
              <li>
                Call Us at
                <span className={classes.phoneNumber}>+123 797-567-2535</span>
              </li>
              <li>
                <a href="mailto: support@auction.com">support@auction.com</a>
              </li>
              <li>
                <SocialMediaIcons animate={true} />
              </li>
            </ul>
          </div>
          {!props.isLoggedIn && subscribeElement}
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
