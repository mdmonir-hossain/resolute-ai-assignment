import { Outlet } from "react-router-dom";


import Navber from "../Header/Navber";
import Footer from "../Footer/Footer";


const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <div className=" min-h-screen">
        <Outlet></Outlet>
      </div>
          <Footer></Footer>
          </div>
  );
};

export default MainLayout;
