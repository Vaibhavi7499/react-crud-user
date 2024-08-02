import axios from "axios";
import React, { useEffect, useState } from "react";
import API_URL from "./API_URL";
import { useNavigate } from "react-router-dom";

function Home() {
  let [users, setUsers] = useState([]);
let navigate =  useNavigate();

  function getUserData() {
    axios
      .get(API_URL.userAPI)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  let deleteUser=(id)=>{
axios({
  method : "DELETE",
  url :API_URL.userAPI+"/"+id,
}).then((r)=>{
  getUserData();
}).catch((err)=>{
  console.log(err);
})
  }

  let editUser=(obj)=>{
navigate("/adduser/"+obj.id);
  }

  let viewUser=(id)=>{
navigate("/viewuser/"+id);
  }

  return (
    <div class="container mt-4">
      <div class="row mb-3">
        <div class="col-md-6">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search..." />
            <button class="btn btn-primary" type="button">
              Search
            </button>
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
          {users.map((e) => (
            <tr>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.phoneNo}</td>
              <td>{e.country}</td>
              <td>{e.email}</td>
              <td>{e.gender}</td>
              <td><button className="btn btn-success" onClick={()=>viewUser(e?.id)}>View</button>{" "}
                <button className="btn btn-info" onClick={()=>editUser(e)}>Edit</button>{" "}
                <button className="btn btn-danger" onClick={()=>deleteUser(e?.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
