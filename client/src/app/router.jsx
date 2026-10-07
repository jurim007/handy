// app/router.jsx
import { createBrowserRouter } from "react-router-dom";
import RoleSelect from "../features/auth/pages/RoleSelect/RoleSelect";
import AuthPage from "../features/auth/pages/AuthPage/AuthPage";

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
]);

export default router;
