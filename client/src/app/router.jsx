// app/router.jsx
import { createBrowserRouter } from "react-router-dom";
import RoleSelect from "../features/auth/pages/RoleSelect/RoleSelect";
import AuthPage from "../features/auth/pages/AuthPage/AuthPage";
import CustomerDashboard from "../features/customer/pages/Dashboard/Dashboard";

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
    path: "/customer/dashboard",
    element: <CustomerDashboard />,
  },
]);

export default router;
