import "./Header.css";
import logo from "../../assets/images/search.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>IT-HÖGSKOLAN</h1>
      </div>
      <div className="search-btn">
      <img src={logo} alt="search"/>
      </div>
    </div>
  );
};

export default Header;
