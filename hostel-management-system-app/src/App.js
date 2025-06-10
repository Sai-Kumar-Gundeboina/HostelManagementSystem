
import Login from './Login';
import './App.css';
import RegisterTenant from './RegisterTenant';
import {BrowserRouter as  Router, Routes, Route, useNavigate, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <h1>Hostel Management System</h1>
          <nav>
            <Link to="/login">Login</Link> |{" "}
            <Link to="/RegisterTenant">Register</Link>
          </nav>
                  
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/RegisterTenant' element={<RegisterTenant/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
