import React from "react";
import Topbar from "../../Components/Navigation/Topbar";
import Toolbar from "../../Components/Navigation/Toolbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Topbar/>
      <div className="grid md:flex ">
        <div className=" md:h-screen border-r-2 bg-white ">
          <Toolbar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
