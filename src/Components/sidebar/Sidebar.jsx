import React from "react";
import SidebarItem from "./SidebarItem";
import { LayoutDashboard, LifeBuoy } from "lucide-react";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { TbBrandGoogleAnalytics, TbLogout } from "react-icons/tb";
import { BsCalendar4Event } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col p-6">
      {/* Logo section */}
      <div className="flex items-center -mt-3 gap-2 mb-10">
        <div className="bg-transparent">
          <img src="/src/assets/logo.png" alt="" />
        </div>
        <h2 className="text-xl font-medium">Donezo</h2>
      </div>

      {/* Menu section */}
      <p className="text-xs ml-[7px] font-semibold text-gray-400 uppercase mb-3">
        Menu
      </p>
      <div className="space-y-2">
        <SidebarItem
          label="Dashboard"
          icon={<LayoutDashboard className="w-4 h-4" />}
          active
        />
        <SidebarItem
          label="Tasks"
          icon={<HiOutlineClipboardDocument className="w-[18px] h-[18px]" />}
        />
        <SidebarItem label="Calendar" icon={<BsCalendar4Event />} />
        <SidebarItem label="Analytics" icon={<TbBrandGoogleAnalytics />} />
        <SidebarItem label="Team" icon={<FiUsers />} />
      </div>

      {/* General section */}
      <p className="text-xs ml-[7px] font-semibold text-gray-400 uppercase mt-8 mb-3">
        General
      </p>
      <div className="space-y-2">
        <SidebarItem
          label="Settings"
          icon={<IoSettingsOutline className="w-4 h-4" />}
        />
        <SidebarItem label="Help" icon={<LifeBuoy className="w-4 h-4" />} />
        <SidebarItem
          label="Logout"
          icon={<TbLogout className="w-[18px] h-[18px]" />}
        />
      </div>

      {/* Download card section */}
      <div className="mt-10">
        <div
          className="relative rounded-2xl p-3 overflow-hidden
  bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-800
  text-white shadow-lg"
        >
          <SlBadge className="mb-2" />

          <div
            className="absolute -top-10 -right-10 w-40 h-40 
    bg-white/10 rounded-full blur-2xl"
          ></div>

          <div className="relative z-10">
            <h3 className="mb-2 leading-tight">
              <span className="font-semibold">Download</span> our <br /> Mobile
              App
            </h3>

            <p className="text-xs text-white/80 mb-4 leading-relaxed">
              Get easy in another way
            </p>

            <button
              className="bg-emerald-500 text-white text-xs font-semibold 
      px-4 py-2 w-full rounded-2xl hover:bg-gray-100 cursor-pointer hover:text-gray-800 transition"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
