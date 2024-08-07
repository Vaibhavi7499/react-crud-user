import React from "react";
import { Link, Outlet } from "react-router-dom";
const Course = () => {
  return (
    <div>
      <h1>You are in Course page.</h1>
      <div>
        <Link to="/course/search">Search</Link> &nbsp;
        <Link to="/course/list">List</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Course;
