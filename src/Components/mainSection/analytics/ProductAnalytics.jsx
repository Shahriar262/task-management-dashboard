import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import useDashboardData from "../../../hooks/useDashboardData";

const ProductAnalytics = () => {
  const { analytics, loading, error } = useDashboardData();

  const chartData = (
    Array.isArray(analytics) ? analytics : analytics?.analytics || []
  ).map((item) => {
    return {
      name: new Date(item.date).toLocaleDateString("en-US", {
        weekday: "short",
      }),
      views: item.views || 0,
      clicks: item.clicks || 0,
      conversions: item.conversions || 0,
    };
  });

  if (loading) {
    return (
      <div className="bg-white p-7 rounded-2xl shadow-sm h-80 animate-pulse flex items-center justify-center">
        <div className="text-gray-400 font-medium">Loading Analytics...</div>
      </div>
    );
  }

  if (error)
    return <div>Something went wrong while fetching analytics data!</div>;

  return (
    <div className="bg-white p-7 rounded-2xl shadow-sm w-full min-h-[350px]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">Product Analytics</h3>
        <div className="flex gap-4 text-xs font-medium">
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 bg-[#14532d] rounded-full"></span> Views
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 bg-[#52c48a] rounded-full"></span> Clicks
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 bg-[#cbd5e1] rounded-full"></span> Conv.
          </span>
        </div>
      </div>

      <div className="h-64">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              barGap={8}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f1f5f9"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <Tooltip
                cursor={{ fill: "#f8fafc" }}
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                }}
              />

              <Bar
                dataKey="views"
                fill="#14532d"
                radius={[4, 4, 0, 0]}
                barSize={12}
              />
              <Bar
                dataKey="clicks"
                fill="#52c48a"
                radius={[4, 4, 0, 0]}
                barSize={12}
              />
              <Bar
                dataKey="conversions"
                fill="#cbd5e1"
                radius={[4, 4, 0, 0]}
                barSize={12}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400 italic text-sm">
            No dynamic data found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductAnalytics;
