// components/layout/PageBackground/PageBackground.jsx
import "./PageBackground.css";

import BottomWave from "../../../assets/icons/wave.svg";
import BottomWave2 from "../../../assets/icons/wave-2.svg";
import WrenchBg from "../../../assets/icons/wrench.svg";
import HouseBg from "../../../assets/icons/home.svg";
import Blob1 from "../../../assets/icons/blob-1.svg";
import Blob2 from "../../../assets/icons/blob-2.svg";

const PageBackground = () => {
  return (
    <div className="page-background">
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

      <img className="bottom-wave" src={BottomWave} alt="" />
      <img className="bottom-wave-2" src={BottomWave2} alt="" />
    </div>
  )
}

export default PageBackground

