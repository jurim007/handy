// app/router.jsx
import { createBrowserRouter } from "react-router-dom";
import RoleSelect from "../features/auth/pages/RoleSelect/RoleSelect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoleSelect />,
  },
  // other routes go here
]);

export default router;
