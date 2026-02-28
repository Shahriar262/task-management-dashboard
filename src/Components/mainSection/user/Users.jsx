import { useEffect, useState } from "react";
import api from "../../../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/api/users");
        setUsers(Array.isArray(res.data) ? res.data : res.data.users || []);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading)
    return <div className="p-6 text-center text-gray-500">Loading User...</div>;
  if (error)
    return (
      <div className="p-6 text-center text-gray-500">
        Error fetching User...
      </div>
    );

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full lg:w-[380px] 2xl:w-110 shrink-0 mx-auto lg:mx-0">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-lg text-gray-800">Users</h3>
        <button className="px-4 py-2 text-green-700 font-medium rounded-3xl border-2 border-green-700 text-sm shrink-0">
          + Add User
        </button>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg transition-colors gap-2"
          >
            <section className="flex items-center gap-2 min-w-0">
              <img
                src="/src/assets/avatar.jpg"
                className="w-10 h-10 rounded-full shrink-0"
                alt=""
              />
              <div className="flex flex-col min-w-0">
                <span className="font-medium text-gray-700 truncate">
                  {user.name}
                </span>
                <span className="text-xs text-gray-400 truncate">
                  {user.email}
                </span>
              </div>
            </section>
            <span
              className={`text-[10px] font-semibold px-2 py-1 rounded-full uppercase shrink-0 ${
                user.status === "active"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-500"
              }`}
            >
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
