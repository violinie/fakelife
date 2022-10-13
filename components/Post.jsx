import React from "react";
import Image from "next/image";

export default function Post(props) {
  return (
    <>
      {/* <div className="post__user">
        <Image className="post__profile-picture" src={props.profilePicture} alt="" width={100} height={100} />
        <div className="post__account">{props.userName}</div>
      </div>

      <Image src={props.posts.coverImg} className="card__img" alt="" width={100} height={100} /> */}
      <p>{props.description}</p>
    </>
  );
}
