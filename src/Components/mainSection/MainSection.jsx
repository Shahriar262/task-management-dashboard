import StatsSection from "./stats/StatsSection";
import ProductAnalytics from "./analytics/ProductAnalytics";
import Reminders from "./reminders/Reminders";
import ProductList from "./products/ProductList";
import Users from "./user/Users";
import SalesProgress from "./progress/SalesProgress";
import TimeTracker from "./tracker/TimeTracker";

const MainSection = () => {
  return (
    <div className="space-y-6 bg-gray-100 border-gray-100 rounded-2xl p-4 sm:p-5">
      {/* Top Section */}
      <section className="flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between">
        <div className="max-w-full">
          <h1 className="text-2xl sm:text-3xl font-semibold">Dashboard</h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Plan, prioritize and accomplish your task with ease.
          </p>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none bg-linear-to-r from-green-700 to-emerald-800 px-4 py-2.5 sm:py-3 text-white rounded-2xl sm:rounded-3xl text-[12px] sm:text-sm font-medium whitespace-nowrap">
            + Add Product
          </button>
          <button className="flex-1 md:flex-none px-4 py-2.5 sm:py-3 text-green-700 rounded-2xl sm:rounded-3xl border-2 border-green-700 text-[12px] sm:text-sm font-medium whitespace-nowrap">
            Import Data
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Main Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Column 1 & 2 */}
        <div className="space-y-6 lg:col-span-2 order-1">
          <ProductAnalytics />
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-start justify-start">
            <Users />
            <SalesProgress />
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-6 order-2 xl:order-3">
          <Reminders />
        </div>

        {/* Column 4 */}
        <div className="space-y-6 order-3 xl:order-4 lg:col-span-2 xl:col-span-1">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-6">
             <ProductList />
             <TimeTracker />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;
