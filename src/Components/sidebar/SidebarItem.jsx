import React from "react";

const SidebarItem = ({ label, active, icon }) => {
  return (
    <div
      className={`flex items-center gap-2 mr-1 px-2 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all
        ${
          active
            ? "bg-white text-emerald-600 shadow-sm"
            : "text-gray-500 hover:bg-white hover:text-gray-700"
        }`}
    >
      {/* Temporary icon placeholder */}
      <div className="w-4 h-4">{icon}</div>

      <span>{label}</span>
    </div>
  );
};

export default SidebarItem;