// app/router.jsx
import { createBrowserRouter } from "react-router-dom";
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

  // CUSTOMER
  {
    path: "/customer/login",
    element: <AuthPage role="customer" />,
  },
  {
    path: "/customer/dashboard",
    element: <CustomerDashboard />,
  },
  {
    path: "/customer/profile",
    element: <Profile />,
  },
  {
    path: "/customer/requests",
    element: <Requests />,
  },

  // PROVIDER
  {
    path: "/provider/login",
    element: <AuthPage role="provider" />,
  },
]);

export default router;
