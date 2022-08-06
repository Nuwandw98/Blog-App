/** @format */

import React from "react";
import Post from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts?.map((post) => (
        <Post post={post} key={post.title} />
      ))}
    </div>
  );
};

export default Posts;
