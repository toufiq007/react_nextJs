import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.length > 0 &&
        posts.map((post) => (
          <Post key={post.id} imgUrl={post.download_url} author={post.author} />
        ))}
    </div>
  );
};

export default Posts;
