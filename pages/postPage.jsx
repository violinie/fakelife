import { getAuthenticatedUser } from "../model/getAuthenticatedUser";
import PostDetail from "../components/Post/PostDetail";

export default function postPage() {
  const user = getAuthenticatedUser();
  const post = user.posts[0];

  return (
    <>
      <PostDetail />
    </>
  );
}
