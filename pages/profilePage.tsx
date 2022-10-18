import React from "react";
import MyProfile from "../components/MyProfile";
import { getAuthenticatedUser } from "../model/getAuthenticatedUser";
import { Data } from "../data/data";

export default function ProfilePage() {
  const user: Data = getAuthenticatedUser();

  return (
    <div className="content">
      <MyProfile user={user} />
    </div>
  );
}
