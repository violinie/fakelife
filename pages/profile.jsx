import Post from "../components/Post";
import data from "./data";
import Link from "next/link";
import Image from "next/image";
import MyProfile from "../components/MyProfile";
import { getAuthenticatedUser } from "../model/getAuthenticatedUser";

export default function Profile() {
  const user = getAuthenticatedUser();

  return (
    <div className="content">
      <MyProfile user={user} />
    </div>
  );
}
