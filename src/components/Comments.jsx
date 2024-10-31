/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import { fetchComments } from "../utils/fetchComments";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    let ignore = false;
    console.log("fetching....");
    const startFetching = async () => {
      const data = await fetchComments(postId);
      if (!ignore) {
        console.log("setting...");
        setComments(data);
      }
    };
    startFetching();

    return () => {
      ignore = true;
    };
  }, [postId]);

  console.log(comments);
  return (
    <div>
      <div>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </div>
    </div>
  );
};

export default Comments;
