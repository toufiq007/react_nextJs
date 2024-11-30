const layout = ({ children, left, right }) => {
  return (
    <div>
      {children}
      <div className="bg-blue-300 flex justify-between p-5 my-5 gap-5">
        <div className="bg-red-500 w-1/2 p-5 text-2xl">{left}</div>
        <div className="bg-yellow-500 w-1/2 p-5 text-3xl">{right}</div>
      </div>
    </div>
  );
};

export default layout;
