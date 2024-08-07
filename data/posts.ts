export interface Post {
    id: number;
    coverImg: string;
    description: string;
    date: string;
  }

  export const posts = [
    {
      id: 1,
      author_id: 1,
      coverImg: "https://source.unsplash.com/random/403x403?monstera",
      description: "monstera",
      date: "září 13, 2019"
    },
    {
      id: 2,
      author_id: 1,
      coverImg: "https://source.unsplash.com/random/403x403?scindapsus",
      description: "scindapsus",
      date: "říjen 14, 2019"
    },
    {
      id: 3,
      author_id: 1,
      coverImg: "https://source.unsplash.com/random/403x403?syngonium",
      description: "syngonium",
      date: "listopad 2, 2019"
    },
    {
      id: 4,
      author_id: 2,
      coverImg: "https://source.unsplash.com/random/403x403?cards",
      description: "cards",
      date: "září 2, 2019"
    },
    {
      id: 5,
      author_id: 2,
      coverImg: "https://source.unsplash.com/random/403x403?memory",
      description: "memory",
      date: "říjen 15, 2019"
    },
  ]

  export const getPostById = (id: string) => {
    return posts.find((post) => {
      return String(post.id) === id;
    });
  };
