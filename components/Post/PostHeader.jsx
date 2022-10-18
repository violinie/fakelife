import React from "react";
import Image from "next/image";

export function PostHeader({ name }) {
  return (
    <div className="content--inner header__user">
      <Image className="profile__profile-picture" src="/150.png" alt="" width={24} height={24} />
      <span className="profile__name">{name}</span>
    </div>
  );
}
