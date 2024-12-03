const ParralelDashboard = ({ children, assignments, notifications }) => {
  return (
    <div>
      {children}
      <div className="w-[90%] mx-auto flex gap-5 h-[100vh]">
        <div className="w-1/2 flex flex-col gap-5">
          {assignments}
          {assignments}
        </div>
        <div className="w-1/2 h-[100vh]">{notifications}</div>
      </div>
    </div>
  );
};

export default ParralelDashboard;
