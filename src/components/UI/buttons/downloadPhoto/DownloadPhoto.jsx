import React from "react";
import classes from "./DownloadPhoto.module.css";


const DownloadPhoto = (props) => {
  return (
    <a href="">
      <svg className={classes.button} src="./DownloadPhoto.png"></svg>
    </a>
  );
};

export default DownloadPhoto;
