import React from "react";
import SidebarItem from "./SidebarItem";
import { LayoutDashboard, LifeBuoy } from "lucide-react";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { TbBrandGoogleAnalytics, TbLogout } from "react-icons/tb";
import { BsCalendar4Event } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { X } from "lucide-react";

const Sidebar = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col p-6 bg-gray-100 border-r border-gray-100 relative">
      <button
        onClick={onClose}
        className="lg:hidden absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-lg transition"
      >
        <X size={20} className="text-gray-600" />
      </button>
      {/* Logo section */}
      <div className="flex items-center -mt-3 gap-2 mb-10">
        <img src="/src/assets/logo.png" alt="Logo" className="w-8 h-8" />
        <h2 className="text-xl font-bold text-gray-800">Donezo</h2>
      </div>

      {/* Main Menu */}
      <div className="flex-1 overflow-y-auto no-scrollbar mb-2">
        <p className="text-[10px] ml-[7px] font-bold text-gray-400 uppercase mb-4 tracking-widest">
          Menu
        </p>
        <div className="space-y-1">
          <SidebarItem
            label="Dashboard"
            icon={<LayoutDashboard className="w-5 h-5" />}
            active
          />
          <SidebarItem
            label="Tasks"
            icon={<HiOutlineClipboardDocument className="w-5 h-5" />}
            badge="12+"
          />
          <SidebarItem
            label="Calendar"
            icon={<BsCalendar4Event className="w-5 h-5" />}
          />
          <SidebarItem
            label="Analytics"
            icon={<TbBrandGoogleAnalytics className="w-5 h-5" />}
          />
          <SidebarItem label="Team" icon={<FiUsers className="w-5 h-5" />} />
        </div>

        {/* General section */}
        <p className="text-[10px] ml-[7px] font-bold text-gray-400 uppercase mt-8 mb-4 tracking-widest">
          General
        </p>
        <div className="space-y-1">
          <SidebarItem
            label="Settings"
            icon={<IoSettingsOutline className="w-5 h-5" />}
          />
          <SidebarItem label="Help" icon={<LifeBuoy className="w-5 h-5" />} />
          <SidebarItem label="Logout" icon={<TbLogout className="w-5 h-5" />} />
        </div>
      </div>

      {/* Download card section */}
      <div className="mt-auto pt-4">
        <div className="relative rounded-2xl p-5 overflow-hidden bg-linear-to-r from-green-800 to-emerald-800 text-white shadow-lg">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center mb-4">
              <SlBadge className="text-white text-sm" />
            </div>

            <h3 className="text-sm font-semibold mb-1 leading-tight">
              Download{" "}
              <span className="font-normal opacity-70">
                our
                <br /> Mobile App
              </span>
            </h3>

            <p className="text-[11px] text-white/80 mb-4">
              Get easy in another way
            </p>

            <button className="bg-emerald-500 text-white text-xs font-semibold px-4 py-2 w-full rounded-2xl hover:bg-gray-100 cursor-pointer hover:text-gray-800 transition">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
