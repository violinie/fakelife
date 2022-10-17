import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Post({ img, description }) {
  return (
    <>
      <Link href="/postPage">
        <a className="post__img">
          <Image src={img} className="card__img" alt={description} layout="fill" />
        </a>
      </Link>
    </>
  );
}
