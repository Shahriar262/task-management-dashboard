import { IoIosArrowUp } from "react-icons/io";

const StatCard = ({
  title,
  value,
  highlight,
  icon,
  percentage,
  statusText,
}) => {
  return (
    <section
      className={`rounded-2xl p-6 shadow-sm min-w-0 ${
        highlight
          ? "bg-linear-to-r from-green-700 to-emerald-800 text-white"
          : "bg-white"
      }`}
    >
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <p className="text-sm opacity-80 truncate pr-1">{title}</p>
        <div className="shrink-0">{icon}</div>
      </div>
      <h2 className="text-2xl sm:text-3xl font-semibold mt-4 truncate">
        {value}
      </h2>

      {/* Bottom Row */}
      {(percentage || statusText) && (
        <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
          {percentage && (
            <span
              className={`px-2 py-0.5 rounded-lg text-[10px] flex items-center border shrink-0
        ${
          highlight
            ? "border-white text-white"
            : "border-green-600 text-green-600"
        }`}
            >
              {percentage} <IoIosArrowUp />
            </span>
          )}

          {statusText && (
            <span
              className={`text-[10px] sm:text-sm ${highlight ? "text-white/80" : "text-gray-500"}`}
            >
              {statusText}
            </span>
          )}
        </div>
      )}
    </section>
  );
};

export default StatCard;
