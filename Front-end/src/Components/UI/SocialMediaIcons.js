import React from "react";
import classes from "./SocialMediaIcons.module.css";

import facebookIcon from "../../Assets/facebookSvg.svg";
import instagramIcon from "../../Assets/instagramSvg.svg";
import twitterIcon from "../../Assets/twitterSvg.svg";

const SocialMediaIcons = (props) => {
  return (
    <React.Fragment>
      <span className={props.animate ? classes.animate : ""}>
        <span className={classes.icons}>
          <a
            href="https://www.facebook.com/malik.huremovic.56"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookIcon} alt="facebook social media icon" />
          </a>
        </span>
        <span className={classes.icons}>
          <a
            href="https://www.linkedin.com/in/malikhuremovic01"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="instagram social media icon" />
          </a>
        </span>
        <span className={classes.icons}>
          <a
            href="https://www.linkedin.com/in/malikhuremovic01"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} alt="twitter social media icon" />
          </a>
        </span>
      </span>
    </React.Fragment>
  );
};

export default SocialMediaIcons;
