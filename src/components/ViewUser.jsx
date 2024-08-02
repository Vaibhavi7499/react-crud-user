import axios from "axios";
import React, { useEffect, useState } from "react";
import API_URL from "./API_URL";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ViewUser = () => {
  let params = useParams();
  let [viewUserData] = useFetch(API_URL.userAPI + "/" + params.id);

  return (
    <div>
      <div className="card p-3" style={{ width: "18rem", margin: "20px auto" }}>
        <h3>User Details</h3>
        <div className="card-body">
          <p className="card-text">
            <strong>Name : </strong>
            {viewUserData.name}
          </p>
          <p className="card-text">
            <strong>Phone No : </strong>
            {viewUserData.phoneNo}
          </p>
          <p className="card-text">
            <strong>Country : </strong>
            {viewUserData.country}
          </p>
          <p className="card-text">
            <strong>Email : </strong>
            {viewUserData.email}
          </p>
          <p className="card-text">
            <strong>Gender : </strong>
            {viewUserData.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
