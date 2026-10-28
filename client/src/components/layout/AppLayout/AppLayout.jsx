// components/layout/AppLayout.jsx
import "./AppLayout.css";
import { Outlet } from "react-router-dom";
import PageBackground from "../PageBackground/PageBackground";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { CUSTOMER_NAV } from "../../../constants/navigation";

const AppLayout = () => {
  return (
    <div className="relative min-h-screen">
      <PageBackground />

      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
