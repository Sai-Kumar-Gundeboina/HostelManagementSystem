import React from 'react';
import Login from './Login';
import RegisterTenant from './RegisterTenant';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#007BFF', color: 'white', textAlign: 'center' }}>
      <h1>Hostel Management System</h1>
      <nav>
            <Link to="/login">Login</Link> |{" "}
            <Link to="/RegisterTenant">Register</Link>
          </nav>
    </header>
  );
}
