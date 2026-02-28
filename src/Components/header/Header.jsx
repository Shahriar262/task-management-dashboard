import { Search, Bell, Menu } from "lucide-react";
import { GoMail } from "react-icons/go";

const Header = ({ onMenuClick }) => {
  return (
    <div className="mx-2 sm:mx-4 rounded-2xl h-16 px-3 sm:px-6 flex items-center justify-between border-b border-gray-100 bg-gray-100 mt-2">
      {/* Search and Menu Container */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {/* Hamburger Menu */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-1.5 hover:bg-white rounded-lg transition shrink-0"
        >
          <Menu size={20} className="text-gray-600" />
        </button>

        {/* Search */}
        <div className="relative ">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search task"
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white rounded-2xl
            focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <img
            src="/src/assets/search-right.png"
            className="absolute top-2 right-5 hidden md:block"
            alt=""
          />
        </div>
      </div>

      {/* Notification & Profile Section */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        <div className="hidden sm:flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-emerald-200 transition">
            <GoMail size={18} className="text-gray-600" />
          </div>

          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-emerald-200 transition">
            <Bell size={18} className="text-gray-600" />
          </div>
        </div>

        {/* Avatar Section */}
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/avatar.jpg"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer"
            alt=""
          />
          <div className="hidden md:block mr-3">
            <h2 className="text-sm font-medium whitespace-nowrap">Totok Michael</h2>
            <p className="text-[11px] text-gray-500 ">tmichael20@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;