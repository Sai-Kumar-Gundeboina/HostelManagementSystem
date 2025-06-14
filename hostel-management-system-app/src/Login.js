import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [role, setRole] = useState("Admin");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (role === "Admin") {
      try {
        const res = await axios.post("https://20.193.131.13:1880/login-admin", form);
        alert("Login Success.... ");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        navigate("/admin-homepage");
      } catch (err) {
        console.error(err);
        alert("Failed to Login..");
        navigate("/login");
        setForm({ username: "", password: "" });
      }
    } else if (role === "Tenant") {
      try {
        const res = await axios.post("https://20.193.131.13:1880/login", {
          emailid: form.username,
          password: form.password,
        });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", "Tenant");
        localStorage.setItem("name", res.data.name)
        navigate("/tenant-homepage");
      } catch (err) {
        console.log(err);
        alert(
          "Admin has not approved your request or Wrong password or username"
        );
        setForm({ username: "", password: "" });
      }
    }
  };
  return (
    <div
      className="Login-page"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/040/890/255/non_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="form-container"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h1>Login</h1>
        <form onSubmit={handleLogin} method="POST">
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignitems: "center",
              justifyContent: "center",
              paddingBottom: "10px",
            }}
          >
            <input
              type="radio"
              name="role"
              value={"Tenant"}
              checked={role === "Tenant"}
              onChange={() => {
                setRole("Tenant");
              }}
            />
            <label>Tenant</label>
            <input
              type="radio"
              name="role"
              value={"Admin"}
              checked={role === "Admin"}
              onChange={() => {
                setRole("Admin");
              }}
            />
            <label>Admin</label>
          </div>
          <label>Username: </label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="username"
            value={form.username}
            required
          />
          <br />
          <label>Password: </label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
            value={form.password}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
