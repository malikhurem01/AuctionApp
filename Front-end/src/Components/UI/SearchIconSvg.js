import React from "react";
import classes from "./SearchIconSvg.module.css";

const SearchIconSvg = () => {
  return (
    <span className={classes.search_button}>
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5005 0.970703C7.74405 0.970676 8.96152 1.32737 10.0084 1.99847C11.0554 2.66957 11.8878 3.6269 12.407 4.75688C12.9262 5.88686 13.1104 7.14206 12.9376 8.37356C12.7649 9.60506 12.2425 10.7612 11.4325 11.7047L17.0765 17.3487L16.3695 18.0557L10.7245 12.4107C9.92837 13.0915 8.97949 13.5698 7.95868 13.8049C6.93786 14.04 5.87535 14.0249 4.86163 13.7608C3.84792 13.4968 2.91304 12.9917 2.13661 12.2885C1.36018 11.5853 0.765213 10.7048 0.402374 9.72213C0.0395349 8.73944 -0.0804241 7.68362 0.0527138 6.64458C0.185852 5.60554 0.568142 4.61407 1.16703 3.75461C1.76591 2.89515 2.56364 2.19316 3.49229 1.70844C4.42093 1.22372 5.45297 0.970623 6.5005 0.970703ZM6.5005 1.9707C5.04181 1.9707 3.64286 2.55017 2.61141 3.58162C1.57996 4.61307 1.0005 6.01201 1.0005 7.4707C1.0005 8.92939 1.57996 10.3283 2.61141 11.3598C3.64286 12.3912 5.04181 12.9707 6.5005 12.9707C7.95919 12.9707 9.35814 12.3912 10.3896 11.3598C11.421 10.3283 12.0005 8.92939 12.0005 7.4707C12.0005 6.01201 11.421 4.61307 10.3896 3.58162C9.35814 2.55017 7.95919 1.9707 6.5005 1.9707Z"
          fill="black"
        />
      </svg>
    </span>
  );
};

export default SearchIconSvg;
