import React from "react";

const SidebarItem = ({ label, active, icon, badge, onClick }) => {
  return (
    <div className="relative flex items-center w-full group">
      {active && (
        <div className="absolute -left-6.5 w-8 h-8 bg-[#14532d] rounded-r-lg" />
      )}

      <div
        onClick={onClick}
        className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all
        ${
          active
            ? "text-gray-900"
            : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-5 h-5 flex items-center justify-center ${active ? "text-[#14532d]" : "text-gray-400"}`}
          >
            {icon}
          </div>
          <span>{label}</span>
        </div>

        {badge && (
          <span className="bg-[#166252] text-white text-[10px] px-1.5 py-0.5 rounded-md font-bold">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
};

export default SidebarItem;
