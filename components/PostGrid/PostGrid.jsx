import Link from "next/link";
import Image from "next/image";
import Post from "./Post";

export const PostGrid = ({ user }) => {
  return (
    <>
      <div className="grid__header">
        <svg width="24" height="24" fill="#262626" ariaLabel="Příspěvky" color="#262626" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M3 3H21V21H3z"></path>
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M9.015 3L9.015 21"></path>
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M14.985 3L14.985 21"></path>
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M21 9.015L3 9.015"></path>
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M21 14.985L3 14.985"></path>
        </svg>

        <svg aria-label="Označení" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24">
          <path
            d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
          <path
            d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
          <circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
        </svg>
      </div>
      <div className="grid__grid">
        {user.posts.map((post) => {
          return <Post key={post.id} img={post.coverImg} description={post.description} id={post.id} />;
        })}
      </div>
    </>
  );
};
