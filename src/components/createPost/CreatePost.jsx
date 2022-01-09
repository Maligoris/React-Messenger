import React, { useState, useRef } from "react";
import classes from "./CreatePost.module.scss";
import PostForm from "../UI/input/PostForm";
import DownloadPhoto from "../UI/buttons/downloadPhoto/DownloadPhoto";
import SendButton from "../UI/buttons/send/SendButton";

const CreatePost = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const [show, setShow] = useState(false);
  const refWrapElm = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <div className={classes.postBox}>
      <div className={classes.postField} ref={refWrapElm}>
        <PostForm
          showTools={{ show, setShow, refWrapElm }}
          value={post.body}
          onChange={(e) => {
            setPost({ ...post, body: e.target.value });
          }}
        />
        <DownloadPhoto />
        {show && (
          <div className={classes.button}>
            <SendButton onClick={addNewPost} disabled={post.body.trim() < 1} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
