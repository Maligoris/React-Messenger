import React from "react";
import classes from "./UserAlbum.module.scss";

const UserAlbum = (props) => {
  return (
    <div className={classes.photosModuleBox}>
      <div className={classes.photosHeaderInfo}>photosHeaderInfo</div>

      <div className={classes.photos}>photos</div>
    </div>
  );
};

export default UserAlbum;
