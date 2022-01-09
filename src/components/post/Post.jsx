import React, { useState } from "react";
import classes from "./Post.module.scss";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div>
        <strong>{props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>

      <div>
        <button onClick={() => props.remove(props.post)}>Удалить</button>
      </div>
    </div>
  );
};

export default Post;
