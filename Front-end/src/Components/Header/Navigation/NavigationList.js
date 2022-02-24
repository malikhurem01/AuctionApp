import React from "react";
import classes from "./NavigationList.module.css";

const NavigationList = (props) => {
  const elements = [
    { label: "home", route: "/#" },
    { label: "shop", route: "/#" },
    { label: "account", route: "/#" },
  ];
  return (
    <div className={classes.navBar_navigation}>
      <ul>
        {elements.map((el) => {
          return (
            <li>
              <a
                className={
                  props.highlight === el.label ? classes.link_active : ""
                }
                href={el.route}
              >
                {el.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationList;
