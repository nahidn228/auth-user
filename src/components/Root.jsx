import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-4">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
