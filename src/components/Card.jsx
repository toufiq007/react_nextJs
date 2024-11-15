/* eslint-disable react/prop-types */
const Card = ({ post }) => {
  return (
    <div style={{background:"#ededed",padding:"30px",borderRadius:"20px"}}>
      <img
        width="400px"
        height="400px"
        style={{ objectFit: "cover" }}
        src={post.imageUrl}
        alt=""
      />
      <p style={{fontSize:"20px"}}>{post.owner}</p>
    </div>
  );
};

export default Card;
