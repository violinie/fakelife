import React from "react";
import Image from "next/image";
import { PostGrid } from "./PostGrid/PostGrid";
import { followers } from "../data/followers";

const MyProfile = ({ user }) => {
  const numberOfPosts = user.posts.length;
  const numOfFollowers = followers.filter((followers) => followers.userId === user.id).length;
  const numOfFollowing = followers.filter((following) => following.followedByUserId === user.id).length;

  return (
    // <header className="profile__headercontent--inner">
    //   <Link href="/">
    //     <a>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="#262626"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <path d="M19 12H6M12 5l-7 7 7 7" />
    //       </svg>
    //     </a>
    //   </Link>
    //   <h1 className="profile__title">plant-app</h1>
    //   <div>
    //     <Image className="post__profile-picture" src={props.profilePicture} alt="" width={100} height={100} />
    //   </div>
    // </header>
    <div>
      <div className="content--inner profile__header">
        <Image className="profile__profile-picture" src={user.profilePicture} alt="" width={77} height={77} />
        <div className="profile__stat">
          <div className="profile__stat-nums">{numberOfPosts}</div>
          <div>Posts</div>
        </div>
        <div className="profile__stat">
          <div className="profile__stat-nums">{numOfFollowers}</div>
          <div>Followers</div>
        </div>
        <div className="profile__stat">
          <div className="profile__stat-nums">{numOfFollowing}</div>
          <div>Following</div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="content--inner profile__description">
        <span className="profile__name">{user.name}</span>
        <div>{user.description}</div>
      </div>
      <PostGrid user={user} />
    </div>
  );
};

export default MyProfile;
