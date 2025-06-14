import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import RegisterTenant from "./RegisterTenant";
import AdminHomePage from "./AdminHomePage";
import TenantHomePage from "./TenantHomePage";
import Layout from "./Layout";
import "./App.css";
import "./styles.css";

function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register-tenant" element={<RegisterTenant />} />
            <Route path="/admin-homepage" element={<AdminHomePage />} />
            <Route path="/tenant-homepage" element={<TenantHomePage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
