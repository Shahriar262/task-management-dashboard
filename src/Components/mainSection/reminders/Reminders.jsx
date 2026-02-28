import { LuVideo } from "react-icons/lu";

const Reminders = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-7 h-60">
      <h3 className="font-semibold text-lg mb-3">Reminders</h3>

      <p className="text-xl font-medium leading-tight mb-2">
        Meeting with Arc <br /> Company
      </p>

      <p className="text-sm text-gray-400 mb-0.5">
        Time: 02:00 pm - 04:00 pm
      </p>

      <button className="mt-4 w-full bg-linear-to-r from-green-700 to-emerald-800 text-white py-2 rounded-full">
      <span className="flex items-center gap-2 justify-center"><LuVideo className="w-6 h-6" /> Start Meeting</span>  
      </button>
    </div>
  );
};

export default Reminders;