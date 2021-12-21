import React, { useEffect, useState, useRef } from "react";
import classes from "./PostForm.module.css";

const PostForm = ({ showTools, ...props }) => {
  // Проверка, если пользователь ткнул вне textarea -> show = false
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        showTools.show &&
        showTools.refWrapElm.current &&
        !showTools.refWrapElm.current.contains(e.target)
      ) {
        showTools.setShow(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showTools.show]);

  return (
    <textarea
      className={showTools.show ? classes.textArea : classes.textAreaShow}
      placeholder=" Что нового?"
      {...props}
      onClick={(e) => {
        showTools.setShow(true);
      }}
    ></textarea>
  );
};

export default PostForm;