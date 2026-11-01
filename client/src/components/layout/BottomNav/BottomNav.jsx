// components/layout/BottomNav/BottomNav.jsx
import { NavLink } from "react-router-dom";

const BottomNav = ({ navItems }) => {
  return (
    <nav className="flex fixed bottom-0 inset-x-0 z-30 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
      {navItems.map(({ to, shortLabel, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-2 py-4 font-medium transition-colors flex-1 ${
              isActive
                ? "text-orange-400"
                : "text-(--color-muted) hover:text-(--color-dark)"
            }`
          }
        >
          <Icon size={25} />
          {shortLabel}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
