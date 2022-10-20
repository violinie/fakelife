import React from "react";
import Image from "next/image";

export function PostHeader({ name, img }) {
  return (
    <div className="content--inner header__user">
      <Image className="profile__profile-picture" src={img} alt="" width={24} height={24} />
      <span className="profile__name">{name}</span>
    </div>
  );
}
