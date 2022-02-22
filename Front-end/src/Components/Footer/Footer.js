import React from "react";
import classes from "./Footer.module.css";
import SocialMediaIcons from "../UI/SocialMediaIcons";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <div className={classes.footerContainer}>
          <div className={classes.footer_about}>
            <h5>Auction</h5>
            <ul>
              <li>
                <a href="/#">About Us</a>
              </li>
              <li>
                <a href="/#">Terms and Conditions</a>
              </li>
              <li>
                <a href="/#">Privacy and Policy</a>
              </li>
            </ul>
          </div>
          <div className={classes.footer_get_in_touch}>
            <h5>Get in touch</h5>
            <ul>
              <li>
                <a href="/#">
                  Call Us at
                  <span className={classes.phoneNumber}>+123 797-567-2535</span>
                </a>
              </li>
              <li>
                <a href="/#">support@auction.com</a>
              </li>
              <li>
                <SocialMediaIcons animate={true} />
              </li>
            </ul>
          </div>
          <div className={classes.footer_subscribe}>
            <h5>Newsletter</h5>
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
                    <svg
                      width="8"
                      height="14"
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33301 1.6665L6.66634 6.99984L1.33301 12.3332"
                        stroke="#8367D8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
