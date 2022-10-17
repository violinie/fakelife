import Post from "../components/PostGrid/Post";
import data from "./data";
import Link from "next/link";
import Image from "next/image";
import MyProfile from "../components/MyProfile";
import { getAuthenticatedUser } from "../model/getAuthenticatedUser";

export default function ProfilePage() {
  const user = getAuthenticatedUser();

  return (
    <div className="content">
      <MyProfile user={user} />
    </div>
  );
}
