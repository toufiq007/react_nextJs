/* eslint-disable react/prop-types */

const Post = ({ imgUrl }) => {

  return (
    <div>
      <img width="300px" height="300px" style={{objectFit:"cover"}} src={imgUrl} alt="" />
    </div>
  );
};

export default Post;
