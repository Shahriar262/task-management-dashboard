import React from "react";
import Sidebar from "../Components/sidebar/Sidebar";
import Header from "../Components/header/Header";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className=" w-64 bg-gray-100 border-r border-gray-100">
        <Sidebar />
      </aside>
      <main className="flex-1 bg-white flex flex-col">
        <Header />

        <div className="flex-1 p-6 overflow-y-auto">
          {/* Main dashboard content */}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
