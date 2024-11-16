/* eslint-disable react/prop-types */

const Stats = ({ totalCount }) => {
  return (
    <div style={{ background: "crimson", padding: "20px", color:"#fff",textAlign:"center" }}>
      <h2>totalcount: {totalCount}</h2>
    </div>
  );
};

export default Stats;
