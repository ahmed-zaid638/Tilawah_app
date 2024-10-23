import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../components/pages/Dashboard/home/Home";
import LibraryRoutes from "./library";
import Quran from "../components/pages/Dashboard/quran/Quran";
import WhishList from "../components/pages/Dashboard/whishlist/WhishList";
import Azkar from "../components/pages/Dashboard/azkar/Azkar";
import Landing from "../pages/Landing";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "library/*",
        element: <LibraryRoutes />,

      },
      {
        path: "quran",
        element: <Quran />,
      },
      {
        path: "whishlist",
        element: <WhishList />
      },
      {
        path: "azkar",
        element: <Azkar />
      }
    ]
  },

]);

export default routes;


