import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "../pages/data";
import { useRouter } from "next/router";
import { getAuthenticatedUser } from "../model/getAuthenticatedUser";

const Footer = () => {
  const { pathname } = useRouter();
  const isHome = pathname === "/";

  const user = getAuthenticatedUser();

  return (
    <footer className="footer">
      {isHome ? (
        <Link href="/">
          <a className="footer__link">
            <svg aria-label="Domů" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>
            </svg>
          </a>
        </Link>
      ) : (
        <Link href="/">
          <a className="icon__link">
            <svg aria-label="Hlavní stránka" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path
                d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </a>
        </Link>
      )}

      <svg aria-label="Hledat a prozkoumat" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
        <path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"></line>
      </svg>
      <svg aria-label="Domů" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
        <path
          d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
        <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
        <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
      </svg>
      <svg aria-label="Direct" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
        <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
        <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
      </svg>
      <Link href="/profilePage">
        <a className="icon__link">
          <Image className="profile-picture" src={user.profilePicture} alt="" width={24} height={24} />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
