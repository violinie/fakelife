import { Post, posts } from "./posts";

export type User = {
  id: number;
  userName: string;
  name: string;
  profilePicture: string;
  description: string;
}

export type Data = User & {
  posts: Post[];
}

const users: User[] = [
  {
    id: 1,
    userName: "plant-app",
    name: "PlantApp",
    profilePicture: "https://source.unsplash.com/random/403x403?plant",
    description: "Nulla bibendum ex sit amet nulla mollis ultrices. Donec ut molestie mi. Nunc viverra augue nisl, ut eleifend turpis fringilla in. ",
  },
  {
    id: 2,
    userName: "minigames",
    name: "Minigames",
    profilePicture: "https://source.unsplash.com/random/403x403?gamer",
    description: "Proin malesuada, nisl vitae consequat dignissim, massa neque viverra orci, ac facilisis dolor lectus egestas ante. ",
  }
]

const data: Data[] = users.map(user => {
  return {
    ...user,
    posts: posts.filter(post => post.author_id === user.id)
  }
});



export default data;