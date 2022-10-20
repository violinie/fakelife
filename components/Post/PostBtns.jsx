import React, { useState } from "react";
import { PostLikeBtn } from "./PostLikeBtn";

export function PostBtns({ post }) {
  const savedState = JSON.parse(localStorage.getItem(`/post/${post.id}`));
  const [isLiked, setIsLiked] = useState(savedState ? savedState.isLiked : false);

  const like = () => {
    setIsLiked(!isLiked);
    localStorage.setItem(`/post/${post.id}`, JSON.stringify({ isLiked: !isLiked }));
  };

  return (
    <div className="post__icons">
      <PostLikeBtn onClickHandler={like} isLiked={isLiked} />
      <a className="icon__link">
        <svg width="24" height="24" fill="#262626" aria-label="Okomentovat" color="#262626" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"></path>
        </svg>
      </a>
      <a className="icon__link">
        <svg width="24" height="24" fill="#262626" color="#262626" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M22 3L9.218 10.083"></path>
          <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M11.698 20.334L22 3.001 2 3.001 9.218 10.084 11.698 20.334z"></path>
        </svg>
      </a>
    </div>
  );
}
