import React from "react";
import Login from "./Login";
import RegisterTenant from "./RegisterTenant";
import { Link } from "react-router-dom";
export default function Header() {
  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
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
        <Link to="/RegisterTenant">Register</Link>|{" "}
        <Link
          to="/login"
          onClick={() => {
            handleLogout();
          }}
        >
          {" "}
          Logout
        </Link>
      </nav>
    </header>
  );
}
