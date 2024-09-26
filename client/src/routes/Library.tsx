import { Route } from "react-router-dom";
import Library from "./Library";
import Test from "../components/pages/Dashboard/home/test"; // Ensure this path is correct

const LibraryRoutes = () => {
  return (
    <>
      <Route index element={<Library />} />
      <Route path="tests" element={<Test />} />
    </>
  );
};

export default LibraryRoutes;
