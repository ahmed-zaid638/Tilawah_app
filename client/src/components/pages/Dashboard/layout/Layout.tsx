import { ReactNode } from "react";
import SideBar from "./SideBar";
import Header from "./Header";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <SideBar />
      <main className="px-4 lg:px-12">
        <Header />
        <div className="mr-32  py-4 h-[100vh]">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
