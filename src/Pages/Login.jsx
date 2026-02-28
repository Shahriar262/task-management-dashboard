import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await login(email, password);
    setLoading(false);

    if (result.success) {
      toast.success("Logged in successfully");
      navigate("/dashboard");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-500 mt-2">Please enter your details</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none text-gray-600"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all outline-none text-gray-600"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              disabled={loading}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all 
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800 active:scale-[0.98]"}`}
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>
        </div>

        <div className="mt-8 p-4 bg-gray-200 rounded-2xl border border-dashed border-gray-300 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            Test Credentials
          </p>
          <div className="text-sm text-gray-600 space-x-4">
            <span>
              Email:{" "}
              <span className="font-mono font-medium text-black">
                user1@example.com
              </span>
            </span>
            <span>
              Pass:{" "}
              <span className="font-mono font-medium text-black">
                password123
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
