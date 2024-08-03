import axios from "axios";
import React, { useEffect, useState } from "react";
import API_URL from "../components/API_URL";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetchEmp";

const AddEmp = () => {
  let navigate = useNavigate();
  let [country] = useFetch(API_URL.countryAPI);
  console.log(country);
  let params = useParams();

  let [employee, setEmployee] = useState({
    name: "",
    phoneNo: "",
    country: "",
    email: "",
    gender: "",
  });

  let addEmpData = () => {
    if (
      employee?.name === "" ||
      employee?.phoneNo === "" ||
      employee?.country === "" ||
      employee?.email === "" ||
      employee?.gender === ""
    ) {
      alert("Please enter the details !!!");
    } else {
      if (params?.id) {
        axios({
          method: "PUT",
          url: API_URL.employeeAPI + "/" + params?.id,
          data: employee,
        }).then((r) => {
          alert("Update user successfully...");
          navigate("/");
        });
      } else {
        axios({
          method: "POST",
          url: API_URL.employeeAPI,
          data: employee,
        }).then((res) => {
          alert("Added user successfully...");
          navigate("/");
        });
      }
    }
  };

  useEffect(() => {
    if (params?.id) {
      axios.get(API_URL.employeeAPI + "/" + params?.id).then((r) => {
        setEmployee({
          name: r.data.name,
          phoneNo: r.data.phoneNo,
          country: r.data.country,
          email: r.data.email,
          gender: r.data.gender,
        });
      });
    }
  }, [params?.id]);
  return (
    <div className="col-md-6 m-auto shadow-sm p-3 mb-5 bg-white rounded mt-3">
      <h1 className="text-center">{params?.id ? "Update" : "Add"} Employee</h1>
      <div className="p-3">
        <div class="form-group">
          <label className="mb-2">Name</label>
          <input
            type="text"
            class="form-control"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label className="mb-2">Phone No</label>
          <input
            type="text"
            class="form-control"
            value={employee.phoneNo}
            onChange={(e) =>
              setEmployee({ ...employee, phoneNo: e.target.value })
            }
          />
        </div>

        <div class="form-group">
          <label className="mb-2">Select Country</label>
          <select
            class="form-control"
            value={employee.country}
            onChange={(e) =>
              setEmployee({ ...employee, country: e.target.value })
            }
          >
            <option value="" disabled>
              select country
            </option>
            {country?.map((e) => (
              <option value={e?.name}>{e?.name}</option>
            ))}
          </select>
        </div>

        <div class="form-group">
          <label className="mb-2">Email</label>
          <input
            type="email"
            class="form-control"
            value={employee.email}
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
          />
        </div>
        <div className="mt-3">
          <div className="row">
            <div class="col-md-3">
              <input
                class="form-check-input"
                type="radio"
                value="male"
                checked={employee.gender === "male"}
                onChange={(e) => setEmployee({ ...employee, gender: "male" })}
              />
              <label class="form-check-label">Male</label>
            </div>
            <div class="col-md-3">
              <input
                class="form-check-input"
                type="radio"
                value="female"
                checked={employee.gender === "female"}
                onChange={(e) => setEmployee({ ...employee, gender: "female" })}
              />
              <label class="form-check-label">Female</label>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary col-md-12" onClick={addEmpData}>
            {params?.id ? "Update" : "Add"}Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmp;
