import Library from "../components/pages/Dashboard/library/Library";
import { Route, Routes } from "react-router-dom";
import Tests from "../components/pages/Dashboard/library/tests/Tests";
import IslamicStories from "../components/pages/Dashboard/library/islamic-stories/IslamicStories";
import Prophet from "../components/pages/Dashboard/library/prophet/Prophet";
import Tasbih from "../components/pages/Dashboard/library/tasbih/Tasbih";
import Fatwa from "../components/pages/Dashboard/library/fatwa/Fatwa";
import Hadith from "../components/pages/Dashboard/library/religiousQuestions/ReligiousQuestions";
import Doaa from "../components/pages/Dashboard/library/doaa/Doaa";
import Podcast from "../components/pages/Dashboard/library/podcast/Podcast";
import Quraa from "../components/pages/Dashboard/library/quraa/Quraa";
import Lectures from "../components/pages/Dashboard/library/lectures/Lectures";
import ReligiousQuestions from "../components/pages/Dashboard/library/religiousQuestions/ReligiousQuestions";


const LibraryRoutes = () => {
    return (
        <Routes>
            <Route index element={<Library />} />
            <Route path="islamic-stories" element={<IslamicStories />} />
            <Route path="prophet" element={<Prophet />} />
            <Route path="tests" element={<Tests />} />
            <Route path="tasbih" element={<Tasbih />} />
            <Route path="fatwa" element={<Fatwa />} />
            <Route path="hadith" element={<Hadith />} />
            <Route path="religious-questions" element={<ReligiousQuestions />} />
            <Route path="prayers" element={<Doaa />} />
            <Route path="podcast" element={<Podcast />} />
            <Route path="quraa" element={<Quraa />} />
            <Route path="lectures" element={<Lectures />} />
        </Routes>

    );
};

export default LibraryRoutes;
