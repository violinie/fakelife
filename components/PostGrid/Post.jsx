import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Post({ img, description }) {
  return (
    <>
      <Link href="/post">
        <a className="post__img">
          <Image src={img} alt={description} layout="fill" />
        </a>
      </Link>
    </>
  );
}
