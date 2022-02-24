import React from "react";
import classes from "./Static.module.css";

import picture1 from "../Assets/about-us-pic1.png";
import picture2 from "../Assets/about-us-pic2.png";
import picture3 from "../Assets/about-us-pic3.png";

const AboutUs = () => {
  return (
    <div className={classes.aboutUs}>
      <h1>About us</h1>
      <div className={classes.container}>
        <div className={classes.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum
            mauris, venenatis sit amet porttitor id, laoreet eu magna. In
            convallis diam volutpat libero tincidunt semper. Ut aliquet erat
            rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit
            amet diam malesuada, eget laoreet quam molestie. In id elementum
            turpis. Curabitur quis tincidunt mauris.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum
            mauris, venenatis sit amet porttitor id, laoreet eu magna. In
            convallis diam volutpat libero tincidunt semper. Ut aliquet erat
            rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit
            amet diam malesuada, eget laoreet quam molestie. In id elementum
            turpis. Curabitur quis tincidunt mauris.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum
            mauris, venenatis sit amet porttitor id, laoreet eu magna. In
            convallis diam volutpat libero tincidunt semper. Ut aliquet erat
            rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit
            amet diam malesuada, eget laoreet quam molestie. In id elementum
            turpis. Curabitur quis tincidunt mauris.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consequat pretium turpis, in eleifend mi laoreet sed. Donec ipsum
            mauris, venenatis sit amet porttitor id, laoreet eu magna. In
            convallis diam volutpat libero tincidunt semper. Ut aliquet erat
            rutrum, venenatis lacus ut, ornare lectus. Quisque congue ex sit
            amet diam malesuada, eget laoreet quam molestie. In id elementum
            turpis. Curabitur quis tincidunt mauris.
          </p>
        </div>
        <div className={classes.pictures}>
          <div>
            <img src={picture1} alt="person smiling" />
          </div>
          <div className={classes.bottomRow}>
            <img src={picture2} alt="person smiling" />
            <img src={picture3} alt="person smiling" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
