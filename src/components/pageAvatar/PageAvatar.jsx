import React, { useState } from "react";
import classes from "./PageAvatar.module.scss";
import avatar from "./img/avatar.jpeg";

const PageAvatar = (props) => {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);
  const showOverlay = {
    height: "60px",
    opacity: "1",
  };
  const dsp = {
    display: "none",
  };

  return (
    <div className={classes.containerPhoto}>
      <img
        src={avatar}
        className={classes.photo}
        onMouseOver={(e) => setOverlayIsOpen(true)}
        onMouseOut={(e) => setOverlayIsOpen(false)}
        alt="avatar"
      />
      <div
        className={classes.overlay}
        onMouseOver={(e) => setOverlayIsOpen(true)}
        onMouseOut={(e) => setOverlayIsOpen(false)}
        style={overlayIsOpen ? showOverlay : null}
      >
        <div
          className={classes.updatePhotoWrap}
          style={overlayIsOpen ? null : dsp}
        >
          <span className={classes.updatePhoto}>Обновить аватар</span>
        </div>
      </div>
    </div>
  );
};

export default PageAvatar;
