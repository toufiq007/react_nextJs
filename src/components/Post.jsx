/* eslint-disable react/prop-types */

const Post = ({ imgUrl, author }) => {
  return (
    <div>
      <img width="300px" height="300px" style={{objectFit:"cover"}} src={imgUrl} alt="" />
      <p>{author}</p>
    </div>
  );
};

export default Post;
