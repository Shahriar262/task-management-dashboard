import { BsStopCircleFill } from "react-icons/bs";
import { MdPauseCircleFilled } from "react-icons/md";

const TimeTracker = () => {
  return (
    <div className="bg-linear-to-r from-green-700 to-emerald-800 text-white rounded-2xl p-6">
      <h3 className="mb-4">Time Tracker</h3>

      <div className="text-3xl font-semibold text-center">
        01:24:08
      </div>

      <div className="flex justify-center items-center mt-3 gap-2">
        <div className="text-white">
          <MdPauseCircleFilled className="w-10 h-10" />
        </div>

        <div className="text-red-500">
          <BsStopCircleFill className="w-9 h-9" />
        </div>
      </div>
    </div>
  );
};

export default TimeTracker;