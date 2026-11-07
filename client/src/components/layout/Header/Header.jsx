// components/layout/Header/Header.jsx
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

import HandyLogo from "../../../assets/logo/handy-logo.png";
import HandyIcon from "../../../assets/logo/logo-icon.png";
import HandyText from "../../../assets/logo/logo-text.png";

const Header = ({ navItems }) => {
  const topNavItems = navItems.filter((item) => !item.mobileOnly);

  return (
    <div>
      <header className="relative z-30 w-full py-10 px-15">
        <div className="flex items-center justify-center md:justify-between md:bg-white md:h-25 md:rounded-2xl">
          <Link to="/customer/dashboard">
            <img className="h-20 md:hidden" src={HandyLogo} alt="Full Logo" />

            <div className="flex items-center gap-1 ml-6">
              <img
                className="h-13 hidden md:block"
                src={HandyIcon}
                alt="Icon Logo"
              />
              <img
                className="h-10 hidden md:block mt-3"
                src={HandyText}
                alt="Handy"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4 mr-6">
            <nav className="flex gap-2">
              {topNavItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                      isActive
                        ? "bg-orange-400/15 text-orange-400"
                        : "text-(--color-muted) hover:text-(--color-dark)"
                    }`
                  }
                >
                  <Icon size={20} />
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="h-8 w-px bg-gray-200" aria-hidden="true" />

            <button
              type="button"
              aria-label="Profili"
              className="flex h-10 w-10 shrink-0 items-center justify-center  rounded-full bg-orange-400/15 text-sm font-semibold text-orange-400"
            >
              JM
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
