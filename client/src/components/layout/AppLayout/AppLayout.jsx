// components/layout/AppLayout.jsx
import "./AppLayout.css";
import { Outlet } from "react-router-dom";
import PageBackground from "../PageBackground/PageBackground";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";

const AppLayout = ({ navItems }) => {
  return (
    <div className="relative min-h-screen">
      <PageBackground />
      <Header navItems={navItems} />
      <main className="relative z-10">
        <Outlet />
      </main>
      <BottomNav navItems={navItems} />
    </div>
  );
};

export default AppLayout;
