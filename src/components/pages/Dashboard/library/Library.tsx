import { Outlet } from "react-router-dom";
import LibrayList from "./LibrayList";

function Library() {
  return (
    <div>
      <LibrayList />
      <Outlet />
    </div>
  );
}

export default Library;
