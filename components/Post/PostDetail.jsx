import React from "react";
import { PostBtns } from "./PostBtns";
import { PostHeader } from "./PostHeader";
import { PostImg } from "./PostImg";
import { PostLikes } from "./PostLikes";

export default function PostDetail({ post }) {
  return (
    <div className="content">
      <PostHeader />
      <PostImg />
      <div className="content--inner">
        <PostBtns />
        <PostLikes />

        <small className="post__date ">září 13, 2019</small>
      </div>
    </div>
  );
}
