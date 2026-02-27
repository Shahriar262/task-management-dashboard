import { Search, Bell } from "lucide-react";
import { GoMail } from "react-icons/go";

const Header = () => {
  return (
    <div className="mx-4 rounded-2xl h-16 px-6 flex items-center justify-between border-b border-gray-100 bg-gray-100">
      {/* Search */}
      <div className="relative">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search task"
          className="pl-9 pr-4 py-2 text-sm bg-white rounded-2xl
          focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <img
          src="/src/assets/search-right.png"
          className="absolute top-2 right-5 "
          alt=""
        />
      </div>

      {/* Notification */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-emerald-200 transition">
          <GoMail size={18} className="text-gray-600" />
        </div>

        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-emerald-200 transition">
          <Bell size={18} className="text-gray-600" />
        </div>

        {/* Avatar */}
        <div className="flex items-center gap-2">
          <img src="/src/assets/avatar.jpg" className="w-10 h-10 rounded-full cursor-pointer"></img>
          <div>
            <h2 className="text-sm font-medium">Totok Michael</h2>
            <p className="text-xs text-gray-500">tmichael20@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
