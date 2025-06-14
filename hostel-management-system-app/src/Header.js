import React from "react";
import Login from "./Login";
import RegisterTenant from "./RegisterTenant";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("name");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header
      style={{
        padding: "1rem",
        backgroundColor: "#007BFF",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Hostel Management System</h1>
      <nav>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register-tenant">Register</Link>|{" "}
        <a
        href="#"
        onClick={(e)=>{
          e.preventDefault();
          handleLogout();
        }}
        >
          {" "}
          Logout
        </a>
      </nav>
    </header>
  );
}
