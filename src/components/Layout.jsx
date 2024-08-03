import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Layout() {
    let navigate = useNavigate();

    let navigateToAddUser=()=>{
        navigate("/adduser");
    }

    let navigateToAddEmp=()=>{
navigate("/addemp");
    }

  return (
    <div className="col-md-12">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid col-md-10">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link navbar-brand" to="/">React Crud User</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="col-md-2">
            <button className="btn btn-primary" onClick={navigateToAddUser}>Add User</button>
          </div> */}
          <div className="col-md-2">
            <button className="btn btn-primary" onClick={navigateToAddEmp}>Add Employee</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Layout;
