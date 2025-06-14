import Login from "./Login";
import "./App.css";
import "./styles.css";
import RegisterTenant from "./RegisterTenant";
import AdminHomePage from "./AdminHomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import Layout from "./Layout";
import TenantHomePage from "./TenantHomePage";

function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/RegisterTenant" element={<RegisterTenant />} />
            <Route path="/AdminHomePage" element={<AdminHomePage />} />
            <Route path="/TenantHomePage" element={<TenantHomePage />} />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
