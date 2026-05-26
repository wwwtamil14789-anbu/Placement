import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Login from "./Login";
import NoPage from "./NoPage";
import NavBar from "./Navbar";
import User from "./User";
import Register from "./Register";
import Users from "./Users";
import './index.css'

function Layout() {

  const location = useLocation();

  return (
    <div>


      {location.pathname !== "/" && location.pathname !== "/Register" && <NavBar />}

      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/User" element={<User />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </div>

    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;