import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import React from "react";

// import Home from "./components/Home";
// import About from "./components/About";
// import AddUser from "./components/AddUser";
// import ViewUser from "./components/ViewUser";
// import AddEmp from "./employeeComponent/AddEmp";
// import HomeEmp from "./employeeComponent/HomeEmp";
// import ViewEmp from "./employeeComponent/ViewEmp";
// import Course from "./components/Course";
// import List from "./components/List";
// import Search from "./components/Search";
// import NestedHome from "./components/NestedHome";
// import NestedAbout from "./components/NestedAbout";
import Todo from "./Todo";
import CssPractise from "./components/CssPractise";
import { Suspense } from "react";

let Home = React.lazy(() => import("./components/Home"));
let About = React.lazy(() => import("./components/About"));
let AddUser = React.lazy(() => import("./components/AddUser"));
let ViewUser = React.lazy(() => import("./components/ViewUser"));
let AddEmp = React.lazy(() => import("./employeeComponent/AddEmp"));
let HomeEmp = React.lazy(() => import("./employeeComponent/HomeEmp"));
let ViewEmp = React.lazy(() => import("./employeeComponent/ViewEmp"));
let Course = React.lazy(() => import("./components/Course"));
let List = React.lazy(() => import("./components/List"));
let Search = React.lazy(() => import("./components/Search"));
let NestedHome = React.lazy(() => import("./components/NestedHome"));
let NestedAbout = React.lazy(() => import("./components/NestedAbout"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/adduser/:id" element={<AddUser />} />
            <Route path="/viewuser/:id" element={<ViewUser />} />
            <Route path="/emphome" element={<HomeEmp />} />
            <Route path="/addemp" element={<AddEmp />} />
            <Route path="/addemp/:id" element={<AddEmp />} />
            <Route path="/viewemp/:id" element={<ViewEmp />} />
            <Route path="course" element={<Course />}>
              <Route path="search" element={<Search />}></Route>
              <Route path="list" element={<List />}></Route>
            </Route>
            <Route path="nestedhome" element={<NestedHome />}>
              <Route path="nestedabout" element={<NestedAbout />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
    // <CssPractise></CssPractise>
    // <Todo></Todo>
  );
}

export default App;
