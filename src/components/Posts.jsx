/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/features/posts/postSlice";

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  // decide what to render
  let content;

  // setting content by the conditions of the data
  if (isLoading) {
    content = <h2>loading posts...</h2>;
  }
  if (isError) {
    content = <h1>{error}</h1>;
  }
  if (!isLoading && !isError && posts.length === 0) {
    content = <h2>no posts found!!</h2>;
  }

  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h2>all posts</h2>
      <div>{content}</div>
    </div>
  );
};

export default Posts;
