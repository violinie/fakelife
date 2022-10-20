import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PostItem({ img, description, id }) {
  return (
    <>
      <Link href={`/post/${id}`}>
        <a className="post__img">
          <Image src={img} alt={description} layout="fill" />
        </a>
      </Link>
    </>
  );
}
