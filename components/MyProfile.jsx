import Link from "next/link";
import Image from "next/image";
import Grid from "./Grid";
import data from "../pages/data";

const MyProfile = ({ user }) => {
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
        <div>posts</div>
        <div>followers</div>
        <div>following</div>
      </div>
      <div className="content--inner profile__description">
        <span className="profile__name">{user.name}</span>
        <div>{user.description}</div>
      </div>
      <Grid user={user} />
    </div>
  );
};

export default MyProfile;
