import "./Header.css";
import Clock from "react-live-clock";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>IT-HÖGSKOLAN</h1>
      </div>

      <div className="digital-clock">
        <Clock format={"HH:mm:ss"} ticking={true} />
      </div>
    </div>
  );
};

export default Header;
