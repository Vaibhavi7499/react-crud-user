import axios from "axios";
import React, { useEffect, useState } from "react";
import API_URL from "../components/API_URL";
import { useNavigate } from "react-router-dom";

const HomeEmp = () => {
  let navigate = useNavigate();
  let [emp, setEmp] = useState([]);
  let [inptValue, setInptValue] = useState("");

  function getEmpData() {
    axios
      .get(API_URL.employeeAPI)
      .then((empres) => {
        setEmp(empres.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  useEffect(() => {
    getEmpData();
  }, []);

  let deleteEmp = (id) => {
    axios({
      method: "DELETE",
      url: API_URL.employeeAPI + "/" + id,
    })
      .then((r) => {
        getEmpData();
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  let editEmp = (obj) => {
    navigate("/addemp/" + obj.id);
  };

  let viewEmp = (id) => {
    navigate("/viewemp/" + id);
  };

  function searchByName(ele) {
    if (ele.target.value === "") {
      getEmpData();
      setInptValue("");
    } else {
      setInptValue(ele.target.value);
      let a = emp.filter((e) => {
        return e.name.toLowerCase().includes(inptValue.toLowerCase());
      });
      setEmp(a);
    }
  }

  return (
    <div class="container mt-4">
      <div class="row mb-3">
        <div class="col-md-6">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search by name"
              value={inptValue}
              onChange={(e) => searchByName(e)}
            />
          </div>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Phone No</th>
            <th scope="col">Country</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((e) => (
            <tr key={e?.id}>
              <td>{e?.id}</td>
              <td>{e?.name}</td>
              <td>{e?.phoneNo}</td>
              <td>{e?.country}</td>
              <td>{e?.email}</td>
              <td>{e?.gender}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => viewEmp(e.id)}
                >
                  View
                </button>{" "}
                <button className="btn btn-info" onClick={() => editEmp(e)}>
                  Edit
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmp(e?.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeEmp;
