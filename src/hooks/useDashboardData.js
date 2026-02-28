import { useEffect, useState } from "react";
import api from "../services/api";

const useDashboardData = () => {
  const [overview, setOverview] = useState(null);
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [overviewRes, analyticsRes] = await Promise.all([
          api.get("/api/overview"),
          api.get("/api/analytics"),
        ]);

        setOverview(overviewRes.data);
        setAnalytics(analyticsRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { overview, analytics, loading };
};

export default useDashboardData;
