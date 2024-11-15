import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/data`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {posts.length > 0 &&
        posts.map((post) => <Card key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
