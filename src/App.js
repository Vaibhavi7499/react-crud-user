import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import AddUser from "./components/AddUser";
import ViewUser from "./components/ViewUser";
import AddEmp from "./employeeComponent/AddEmp";
import HomeEmp from "./employeeComponent/HomeEmp";
import ViewEmp from "./employeeComponent/ViewEmp";
import CssPractise from "./components/CssPractise";
import Course from "./components/Course";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
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
        </Routes>
      </BrowserRouter>
    </div>
    // <CssPractise></CssPractise>
  );
}

export default App;
