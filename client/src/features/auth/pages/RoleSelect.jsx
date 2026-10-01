// features/auth/pages/RoleSelect.jsx
import "./RoleSelect.css";
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
  <span className="go-circle" aria-hidden="true">
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
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
        className="background-decoration wrench-decoration"
        src={WrenchBg}
        alt=""
      />

      <img
        className="background-decoration house-decoration"
        src={HouseBg}
        alt=""
      />

      <div className="role-content">
        <div className="flex justify-center">
          <img className="logo h-50" src={HandyLogo} alt="Handy Logo" />
        </div>

        <section className="choose text-center mb-10">
          <h1>
            Si dëshironi të<br></br>përdorni Handy?
          </h1>
          <p>Zgjidhni rolin tuaj për të vazhduar</p>
        </section>

        <section className="flex justify-center gap-8">
          <div className="customer role-card w-130 flex rounded-2xl">
            <img
              className="w-70 h-70 object-contain"
              src={Customer}
              alt="Customer"
            />
            <div className="user-tile w-60 p-7">
              <h2>Jam klient</h2>
              <p>Gjej ofrues shërbimi për nevojat e tua</p>
            </div>
            <GoCircle />
          </div>

          <div className="provider role-card flex w-130 bg-blue-200 rounded-2xl">
            <img
              className="w-70 h-70 object-contain"
              src={Provider}
              alt="Provider"
            />
            <div className="user-tile w-60 p-7">
              <h2>Jam ofrues shërbimi</h2>
              <p>Rregjistrohu dhe merr kërkesa nga klientë</p>
            </div>
            <GoCircle />
          </div>
        </section>
      </div>

      <img className="bottom-wave" src={BottomWave} alt="" />
      <img className="bottom-wave-2" src={BottomWave2} alt="" />
    </div>
  );
};

export default RoleSelect;
