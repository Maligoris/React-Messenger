import React from "react";
import classes from "./UserPhotos.module.css";

const UserPhotos = (props) => {
  return (
    <div className={classes.photosModuleBox}>
      <div className={classes.photosHeaderInfo}>photosHeaderInfo</div>

      <div className={classes.photos}>photos</div>
    </div>
  );
};

export default UserPhotos;
