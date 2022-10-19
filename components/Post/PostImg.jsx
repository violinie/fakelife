import React from "react";
import Image from "next/image";

export function PostImg({ source }) {
  return (
    <div className="post__img">
      <Image src={source} alt="" layout="fill" />
    </div>
  );
}
