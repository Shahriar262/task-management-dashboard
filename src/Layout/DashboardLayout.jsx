import React from "react";
import Sidebar from "../Components/sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className=" w-64 bg-gray-100 border-r border-gray-100">
        <Sidebar />
      </aside>
    </div>
  );
};

export default DashboardLayout;
