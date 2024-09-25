import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import Home2 from "./components/pages/Dashboard/home/Home";
import Library from "./components/pages/Dashboard/library/Library";
import WhishList from "./components/pages/Dashboard/whishlist/WhishList";
import Azkar from "./components/pages/Dashboard/azkar/Azkar";
import Quran from "./components/pages/Dashboard/quran/Quran";
import Tests from "./components/pages/Dashboard/library/tests/Tests"; // Corrected to 'Tests'
import IslamicStories from "./components/pages/Dashboard/library/islamic-stories/IslamicStories";
import Prophet from "./components/pages/Dashboard/library/prophet/Prophet";
import Tasbih from "./components/pages/Dashboard/library/tasbih/Tasbih";
import Fatwa from "./components/pages/Dashboard/library/fatwa/Fatwa";
import Hadith from "./components/pages/Dashboard/library/ِhadiths/Hadith";
import ReligiousQuestions from "./components/pages/Dashboard/library/religiousQuestions/ReligiousQuestions";
import Doaa from "./components/pages/Dashboard/library/doaa/Doaa";
import Podcast from "./components/pages/Dashboard/library/podcast/Podcast";
import Quraa from "./components/pages/Dashboard/library/quraa/Quraa";
import Lectures from "./components/pages/Dashboard/library/lectures/Lectures";

const LibraryRoutes = () => {
  return (
    <Route path="library">
      <Route index element={<Library />} />
      <Route path="islamic-stories" element={<IslamicStories />} />
      <Route path="prophet" element={<Prophet />} />
      <Route path="tests" element={<Tests />} /> {/* Changed to 'Tests' */}
      <Route path="tasbih" element={<Tasbih />} />
      <Route path="fatwa" element={<Fatwa />} />
      <Route path="hadith" element={<Hadith />} />
      <Route path="religious-questions" element={<ReligiousQuestions />} />
      <Route path="prayers" element={<Doaa />} />
      <Route path="podcast" element={<Podcast />} />
      <Route path="quraa" element={<Quraa />} />
      <Route path="lectures" element={<Lectures />} />
    </Route>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home2 />} />
          <Route path="quran" element={<Quran />} />
          {LibraryRoutes()}
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
