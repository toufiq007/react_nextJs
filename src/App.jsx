import { useState } from "react";
import "./App.css";
import AddPost from "./components/AddPost.jsx";
import EditPost from "./components/EditPost.jsx";
import Posts from "./components/Posts";
import initialPosts from "./data/db.js";

export default function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [post, setPost] = useState(null); // post I am editing
  const [error, setError] = useState(null);

  console.log(post, "selected post");

  const handleAddPost = (newPost) => {
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    setPosts((prevPosts) => [...prevPosts, { id, ...newPost }]);
  };

  const handleEditPost = (updatedPost) => {
    console.log(updatedPost);
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === updatedPost.id ? { ...updatedPost } : post
      )
    );
  };

  const handleDeletePost = (postId) => {
    if (confirm) {
      const updatedPost = posts.filter((post) => post.id != postId);
      setPosts(updatedPost);
    }
  };

  return (
    <div>
      <div>
        <h1>API Request with Axios</h1>
        <hr />

        <div>
          <Posts
            posts={posts}
            onDeletePost={handleDeletePost}
            onEditClick={setPost}
          />

          <hr />

          {!post ? (
            <AddPost onAddPost={handleAddPost} />
          ) : (
            <EditPost post={post} onEditPost={handleEditPost} />
          )}

          {error && (
            <>
              <hr />
              <div className="error">{error}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
