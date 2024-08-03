import React from "react";
import API_URL from "../components/API_URL";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetchEmp";

const ViewEmp = () => {
  let navigate = useNavigate();

  let params = useParams();
  let [viewEmpData] = useFetch(API_URL.employeeAPI + "/" + params?.id);

  let backToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <button className="btn btn-success mt-4" onClick={backToHomePage}>
        Back to Home Page
      </button>
      <div className="card p-3" style={{ width: "18rem", margin: "20px auto" }}>
        <h3>User Details</h3>
        <div className="card-body">
          <p className="card-text">
            <strong>Name : </strong>
            {viewEmpData.name}
          </p>
          <p className="card-text">
            <strong>Phone No : </strong>
            {viewEmpData.phoneNo}
          </p>
          <p className="card-text">
            <strong>Country : </strong>
            {viewEmpData.country}
          </p>
          <p className="card-text">
            <strong>Email : </strong>
            {viewEmpData.email}
          </p>
          <p className="card-text">
            <strong>Gender : </strong>
            {viewEmpData.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewEmp;
