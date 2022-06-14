import "./Header.scss";
import Clock from "react-live-clock";
import HeaderLogo from "../../assets/images/ITHS_logo_liggande_payoff_RGB2.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={HeaderLogo} alt="" />
      </div>

      <div className="digital-clock">
        <Clock format={"HH:mm:ss"} ticking={true} />
      </div>
    </div>
  );
};

export default Header;
