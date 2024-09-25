import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import Home2 from "./components/pages/Dashboard/home/Home"; // Renamed for clarity
import Library from "./components/pages/Dashboard/library/Library";
import WhishList from "./components/pages/Dashboard/whishlist/WhishList";
import Azkar from "./components/pages/Dashboard/azkar/Azkar";
import Quran from "./components/pages/Dashboard/quran/Quran";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home2 />} />
          <Route path="quran" element={<Quran />} />
          <Route path="library" element={<Library />} />
          <Route path="whishlist" element={<WhishList />} />
          <Route path="azkar" element={<Azkar />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
