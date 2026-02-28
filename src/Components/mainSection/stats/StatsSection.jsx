import { BsArrowUpRightCircle } from "react-icons/bs";
import StatCard from "./StatCard";
import useDashboardData from "../../../hooks/useDashboardData";

const StatsSection = () => {
  const { overview, loading, error } = useDashboardData();

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-28 bg-gray-200 rounded-2xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (error)
    return <div>Something went wrong while fetching stats data!</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      <StatCard
        title="Total Users"
        value={overview?.totalUsers}
        icon={<BsArrowUpRightCircle className="w-6 h-6" />}
        percentage={overview?.growth}
        statusText="Increased from last month"
        highlight
      />

      <StatCard
        title="Active Users"
        value={overview?.activeUsers}
        icon={<BsArrowUpRightCircle className="w-6 h-6" />}
        percentage={overview?.growth}
        statusText="Increased from last month"
      />

      <StatCard
        title="Revenue"
        value={`$${overview?.revenue?.toLocaleString()}`}
        icon={<BsArrowUpRightCircle className="w-6 h-6" />}
        percentage={overview?.growth}
        statusText="Increased from last month"
      />

      <StatCard
        title="Growth"
        value={`${overview?.growth}%`}
        icon={<BsArrowUpRightCircle className="w-6 h-6" />}
        statusText="Overall Growth"
      />
    </div>
  );
};

export default StatsSection;
