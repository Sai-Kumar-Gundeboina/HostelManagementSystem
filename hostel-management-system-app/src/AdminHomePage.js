import React, { useEffect, useState } from "react";

import axios from "axios";
import "./styles.css";
export default function AdminHomePage() {
  const [tenantData, setTenantData] = useState([]);

  useEffect(() => {
    fetchTenantDetails();
  }, []);

  const fetchTenantDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:1880/get-tenants", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTenantData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleApprove = async (id) => {
    const roomNo = prompt("Please Enter available room Number: ");
    try {
      const roomNumber = parseInt(roomNo);
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:1880/approve-tenant/${id}`,
        {
          roomNo: roomNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Approved Successfully");
      fetchTenantDetails();
    } catch (err) {
      alert("Failed to approve...");
      console.log(err);
    }
  };
  const handleReject = async (id) => {
    const choice = prompt("Do you really want to delete (Y/N)?");
    if (choice.toUpperCase() === "Y" || choice.toUpperCase() === "YES") {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `http://localhost:1880/reject-tenant/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert("Rejected Successfully");
        fetchTenantDetails();
      } catch (err) {
        alert("Failed to approve...");
        console.log(err);
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
          width: "90%",
        }}
      >
        <h1>AdminHomePage</h1>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Preferred Room</th>
              <th>Permanenet Adress</th>
              <th>Status</th>
              <th>Registered Time</th>
              <th>Allocated Room</th>
              {localStorage.getItem("role") === "admin" && (
                <>
                  <th>Action</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {tenantData.map((tenant) => (
              <tr key={tenant.id}>
                <td>{tenant.name}</td>
                <td>{tenant.emailid.toUpperCase()}</td>
                <td>{tenant.mobile}</td>
                <td>{tenant.roomType}</td>
                <td>{tenant.permanentAdr}</td>
                <td>{tenant.status}</td>
                <td>{tenant.registered_at}</td>
                <td>
                  <strong>{tenant.allocatedRoom}</strong>
                </td>
                <td>
                  <button onClick={() => handleApprove(tenant.id)}>
                    Approve
                  </button>
                  |
                  <button onClick={() => handleReject(tenant.id)}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
