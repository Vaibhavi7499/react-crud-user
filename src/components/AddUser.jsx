import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API_URL from "./API_URL";
import useFetch from "./useFetch";

function AddUser() {
  let [country] = useFetch(API_URL.countryAPI);
  console.log(country)
  let [users, setUsers] = useState({
    name: "",
    phoneNo: "",
    country: "",
    email: "",
    gender: "",
  });
  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    if (params.id) {
      axios.get(API_URL.userAPI + "/" + params.id).then((res) => {
        setUsers({
          name: res.data.name,
          phoneNo: res.data.phoneNo,
          country: res.data.country,
          email: res.data.email,
          gender: res.data.gender,
        });
      });
    }
  }, [params.id]);

  let addUsers = () => {
    if (
      users?.name === "" ||
      users.email === "" ||
      users.country === "" ||
      users.gender === "" ||
      users.phoneNo === ""
    ) {
      alert("Please enter the details....");
    } else {
      if (params?.id) {
        axios({
          method: "PUT",
          url: API_URL.userAPI + "/" + params?.id,
          data: users,
        }).then((res) => {
          alert("User update successfully");
          navigate("/");
        });
      } else {
        axios({
          method: "POST",
          url: API_URL.userAPI,
          data: users,
        })
          .then((res) => {
            alert("User added successfully ...");
            navigate("/");
          })
          .catch((err) => {
            console.warn(err);
          });
      }
    }
  };

  return (
    <div className="col-md-6 m-auto shadow-sm p-3 mb-5 bg-white rounded mt-3">
      <h1 className="text-center">{params.id ? "Update" : "Add"} User</h1>
      <div className="p-3">
        <div class="form-group">
          <label className="mb-2">Name</label>
          <input
            type="text"
            class="form-control"
            value={users.name}
            onChange={(e) => setUsers({ ...users, name: e.target.value })}
          />
        </div>
        <div class="form-group">
          <label className="mb-2">Phone No</label>
          <input
            type="text"
            class="form-control"
            value={users.phoneNo}
            onChange={(e) => setUsers({ ...users, phoneNo: e.target.value })}
          />
        </div>

        <div class="form-group">
          <label className="mb-2">Select Country</label>
          <select
            class="form-control"
            value={users.country}
            onChange={(e) => setUsers({ ...users, country: e.target.value })}
          >
            <option value="" disabled>
              select
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
            value={users.email}
            onChange={(e) => setUsers({ ...users, email: e.target.value })}
          />
        </div>
        <div className="mt-3">
          <div className="row">
            <div class="col-md-3">
              <input
                class="form-check-input"
                type="radio"
                value="male"
                checked={users?.gender === "male"}
                onClick={(e) => setUsers({ ...users, gender: "male" })}
              />
              <label class="form-check-label">Male</label>
            </div>
            <div class="col-md-3">
              <input
                class="form-check-input"
                type="radio"
                value="female"
                checked={users?.gender === "female"}
                onClick={(e) => setUsers({ ...users, gender: "female" })}
              />
              <label class="form-check-label">Female</label>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button className="btn btn-primary col-md-12" onClick={addUsers}>
            {params.id ? "Update" : "Add"} User
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddUser;
