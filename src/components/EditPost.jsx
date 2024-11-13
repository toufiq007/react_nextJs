/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function EditPost({ post, onEditPost }) {
  console.log(post, "this is the selected post");
  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");

  useEffect(() => {
    setTitle(post ? post.title : "");
    setBody(post ? post.body : "");
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      id: post.id,
      title,
      body,
    };
    onEditPost(updatedPost);

    // reset form
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h2>Edit post</h2>

      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>

        <p>
          <input
            type="text"
            placeholder="Post body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </p>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
