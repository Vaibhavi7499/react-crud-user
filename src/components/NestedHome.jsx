import React from "react";
import { Link, Outlet } from "react-router-dom";

const NestedHome = () => {
  return (
    <div>
      <h1>This is Nested Home page</h1>
      <div>
        <Link to="/nestedhome/nestedabout">Nested About</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NestedHome;
