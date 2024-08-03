import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Layout() {
  let navigate = useNavigate();
  let location = useLocation();

  let navigateToPath = () => {
    if (location?.pathname === "/emphome") {
      navigate("/addemp");
    } else {
      navigate("/adduser");
    }
  };

  return (
    <div className="col-md-12">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid col-md-10">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link navbar-brand" to="/">
                  React Crud User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  User Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/emphome">
                  Employee Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary" onClick={navigateToPath}>
              {location?.pathname === "/emphome"
                ? "Add Employee"
                : location?.pathname === "/"
                ? "Add User"
                : ""}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Layout;
