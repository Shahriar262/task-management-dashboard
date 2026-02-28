import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([

  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
]);

export default router;