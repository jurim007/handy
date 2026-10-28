// app/router.jsx
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout/AppLayout";

import RoleSelect from "../features/auth/pages/RoleSelect/RoleSelect";
import AuthPage from "../features/auth/pages/AuthPage/AuthPage";
import CustomerDashboard from "../features/customer/pages/Dashboard/Dashboard";
import Profile from "../features/customer/pages/Profile/Profile";
import Requests from "../features/customer/pages/Requests/Requests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoleSelect />,
  },
  {
    path: "/customer/login",
    element: <AuthPage role="customer" />,
  },
  {
    path: "/provider/login",
    element: <AuthPage role="provider" />,
  },

  {
    path: "/customer",
    element: <AppLayout />,
    children: [
      { path: "dashboard", element: <CustomerDashboard /> },
      { path: "requests", element: <Requests /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default router;
