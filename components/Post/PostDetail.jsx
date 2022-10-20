import { userAgent } from "next/server";
import React from "react";
import { PostBtns } from "./PostBtns";
import { PostHeader } from "./PostHeader";
import { PostImg } from "./PostImg";
import { PostLikes } from "./PostLikes";

export default function PostDetail({ post, user }) {
  console.log(post);
  return (
    <div className="content">
      <PostHeader name={user.userName} img={user.profilePicture} />
      <PostImg source={post.coverImg} />
      <PostBtns post={post} />
      <div className="content--inner">
        <PostLikes />

        <small className="post__date ">{post.date}</small>
      </div>
    </div>
  );
}
