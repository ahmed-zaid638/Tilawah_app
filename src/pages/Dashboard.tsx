import SideBar from "../components/pages/Dashboard/layout/SideBar";
import Header from "../components/pages/Dashboard/layout/Header";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="">
      <SideBar />
      <main className="px-4 lg:px-12">
        <Header />
        <div className="mr-20 md:mr-32 py-4 h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
