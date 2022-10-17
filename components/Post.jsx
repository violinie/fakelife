import React from "react";
import Image from "next/image";
import Link from "next/link";
import { productionBrowserSourceMaps } from "../next.config";

export default function Post({ img, description }) {
  return (
    <>
      <Link href="/postPage">
        <a className="post__link">
          <Image src={img} className="card__img" alt={description} layout="fill" />
        </a>
      </Link>
    </>
  );
}
