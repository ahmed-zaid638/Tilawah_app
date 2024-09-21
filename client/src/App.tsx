import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPAge";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
