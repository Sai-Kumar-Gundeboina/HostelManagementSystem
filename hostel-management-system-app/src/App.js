
import Login from './Login';
import './App.css';
import './styles.css'
import RegisterTenant from './RegisterTenant';
import {BrowserRouter as  Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Layout>
      <div className="App">                 
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/RegisterTenant' element={<RegisterTenant/>}/>
        </Routes>
      </div>
      </Layout>
    </Router>
    
  );
}

export default App;
