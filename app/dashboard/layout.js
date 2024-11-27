import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <nav className="my-5">
        <ul className="flex p-5 gap-5">
          <li>settings</li>
          <li>analytics</li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default DashboardLayout;
