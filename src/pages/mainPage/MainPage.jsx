import React, { useState } from "react";
import classes from "./MainPage.module.scss";
import TopNav from "../../components/topNav/TopNav";
import SideBar from "../../components/sideBar/SideBar";
import PageAvatar from "../../components/pageAvatar/PageAvatar";
import InfoBlockAboutUser from "../../components/infoBlockAboutUser/InfoBlockAboutUser";
import UserAlbum from "../../components/userAlbum/UserAlbum";
import CreatePostForm from "../../components/createPost/CreatePost";
import Post from "../../components/post/Post";

function MainPage() {
  const [posts, setPosts] = useState([
    { id: 1, title: "TITLE", body: "BODY" },
    { id: 2, title: "TITLE 2", body: "BODY" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className={classes.mainPage}>
      <TopNav />
      <SideBar />

      <div className={classes.narrowColumn}>
        <PageAvatar />
      </div>

      <div className={classes.wideColumn}>
        <InfoBlockAboutUser />
        <UserAlbum />
        <CreatePostForm create={createPost} />
        {posts.map((post) => (
          <Post post={post} remove={removePost} key={[post.id]} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
