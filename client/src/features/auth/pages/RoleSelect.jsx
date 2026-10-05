// features/auth/pages/RoleSelect.jsx
import "./RoleSelect.css";
import { Link } from "react-router-dom";

import HandyLogo from "../../../assets/logo/handy-logo.png";
import Customer from "../../../assets/images/customer.png";
import Provider from "../../../assets/images/provider.png";
import BottomWave from "../../../assets/icons/wave.svg";
import BottomWave2 from "../../../assets/icons/wave-2.svg";
import WrenchBg from "../../../assets/icons/wrench.svg";
import HouseBg from "../../../assets/icons/home.svg";
import Blob1 from "../../../assets/icons/blob-1.svg";
import Blob2 from "../../../assets/icons/blob-2.svg";

const GoCircle = () => (
  <span className="go-circle absolute right-4 bottom-4 md:right-5 md:bottom-5 w-9 h-9 md:w-11 md:h-11 rounded-full bg-[#ff7a1a] grid place-items-center shadow-[0_4px_12px_rgba(255,122,26,0.35)] transition-transform duration-150 group-hover:scale-110 shrink-0">
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-150 group-hover:translate-x-0.5"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  </span>
);

const RoleSelect = () => {
  return (
    <div className="role-page">
      <img
        className="background-decoration blob-2-decoration"
        src={Blob1}
        alt=""
      />
      <img
        className="background-decoration blob-1-decoration"
        src={Blob2}
        alt=""
      />
      <img
        className="background-decoration wrench-decoration hidden md:block"
        src={WrenchBg}
        alt=""
      />
      <img
        className="background-decoration house-decoration hidden md:block"
        src={HouseBg}
        alt=""
      />

      <div className="role-content px-4 py-6 max-w-5xl mx-auto">
        <div className="flex justify-center">
          <img
            className="h-20 sm:h-28 md:h-50"
            src={HandyLogo}
            alt="Handy Logo"
          />
        </div>

        <section className="text-center mb-8 md:mb-10 mt-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
            Si dëshironi të<br />përdorni Handy?
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-600">
            Zgjidhni rolin tuaj për të vazhduar
          </p>
        </section>

        <section className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 md:gap-8">
          <Link
            to="/customer/login"
            className="group role-card relative cursor-pointer w-full sm:max-w-130 flex items-center rounded-2xl bg-orange-500/15 shadow-[0_0_20px_rgba(255,122,26,0.15)] overflow-hidden"
          >
            <img
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-70 md:h-70 object-contain shrink-0"
              src={Customer}
              alt="Customer"
            />
            <div className="flex-1 min-w-0 p-4 sm:p-5 md:p-7 pr-14 sm:pr-16">
              <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-1 sm:mb-2">
                Jam klient
              </h2>
              <p className="text-xs sm:text-sm md:text-lg text-gray-600">
                Gjej ofrues shërbimi për nevojat e tua
              </p>
            </div>
            <GoCircle />
          </Link>

          <Link
            to="/provider/login"
            className="group role-card relative cursor-pointer w-full sm:max-w-130 flex items-center rounded-2xl bg-blue-200/30 shadow-[0_0_20px_rgba(144,213,255,0.28)] overflow-hidden"
          >
            <img
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-70 md:h-70 object-contain shrink-0"
              src={Provider}
              alt="Provider"
            />
            <div className="flex-1 min-w-0 p-4 sm:p-5 md:p-7 pr-14 sm:pr-16">
              <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-1 sm:mb-2">
                Jam ofrues shërbimi
              </h2>
              <p className="text-xs sm:text-sm md:text-lg text-gray-600">
                Rregjistrohu dhe merr kërkesa nga klientë
              </p>
            </div>
            <GoCircle />
          </Link>
        </section>
      </div>

      <img className="bottom-wave" src={BottomWave} alt="" />
      <img className="bottom-wave-2" src={BottomWave2} alt="" />
    </div>
  );
};

export default RoleSelect;