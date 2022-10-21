import React from "react";
import { NextPage } from "next";
import { getAuthenticatedUser } from "../../model/getAuthenticatedUser";
import PostDetail from "../../components/Post/PostDetail";
import { useRouter } from "next/router";
import { getPostById } from "../../data/posts";

export const PostPage: NextPage = () => {
  const { query } = useRouter();
  const user = getAuthenticatedUser();
  const post = getPostById(query.id as string);

  if (!post) {
    return <>not found</>;
  }

  return (
    <>
      <PostDetail post={post} user={user} />
    </>
  );
};

export default PostPage;
