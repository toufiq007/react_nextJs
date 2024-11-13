import { useEffect, useState } from "react";
import "./App.css";
import AddPost from "./components/AddPost.jsx";
import EditPost from "./components/EditPost.jsx";
import Posts from "./components/Posts";
import axios from "axios";
// import initialPosts from "./data/db.js";

export default function App() {
  const [posts, setPosts] = useState([]);
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

  // fetch our posts form json-server api
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/post`);
        if (response.statusText === "OK") {
          setPosts(response.data);
        }
      } catch (err) {
        // error got from the server
        if (err.response) {
          setError(
            `error from server: status code : ${err?.response.status} errorName: ${err.response.data}`
          );
        }
        // error got if request is not sent to the server or network error
        else {
          setError(`error name: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

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
