import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const progressData = [
  { name: "Completed", value: 41, color: "#52c48a" },
  { name: "In Progress", value: 30, color: "#14532d" },
  { name: "Pending", value: 29, color: "url(#stripe-progress)" },
];

const SalesProgress = () => {
  return (
    <div className="bg-white p-6 rounded-2xl w-full lg:w-[300px] 2xl:w-105 shadow-sm flex flex-col items-center shrink-0 lg:ml-5 min-[1500px]:ml-40 transition-all">
      <h3 className="text-lg font-bold self-start mb-2">Sales Progress</h3>

      <div className="relative w-full h-48 flex justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              <pattern
                id="stripe-progress"
                width="6"
                height="6"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="6"
                  stroke="#cbd5e1"
                  strokeWidth="3"
                />
              </pattern>
            </defs>
            <Pie
              data={progressData}
              cx="50%"
              cy="80%"
              startAngle={180}
              endAngle={0}
              innerRadius={70}
              outerRadius={100}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
              cornerRadius={10}
            >
              {progressData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
          <span className="text-4xl font-bold text-gray-800">41%</span>
          <span className="text-gray-500 text-sm">Sales Completed</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs font-medium text-gray-600">
        {/* Completed */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#52c48a]"></div>
          <span>Completed</span>
        </div>

        {/* In Progress */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#14532d]"></div>
          <span>In Progress</span>
        </div>

        {/* Pending with Stripe Pattern */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-slate-200 overflow-hidden relative border border-gray-100">
            <div
              className="absolute inset-0 rotate-45 border-l-[1.5px] border-gray-400 scale-150"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, transparent 25%, #94a3b8 25%, #94a3b8 50%, transparent 50%, transparent 75%, #94a3b8 75%, #94a3b8 100%)",
                backgroundSize: "4px 4px",
              }}
            ></div>
          </div>
          <span>Pending</span>
        </div>
      </div>
    </div>
  );
};

export default SalesProgress;
