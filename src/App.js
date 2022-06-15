import "./App.scss";
import Header from "./components/header/Header";
import WeatherApp from "./components/weather/WeatherApp";
import CalendarComp from "./components/calendar/CalendarComp";
import Logo from "./assets/images/logo.png";
import SL from "./components/SL/SL";
import TwitterFeed from "./components/twitter/TwitterFeed";
import Footer from "./components/footer/Footer";
import Piravid from "./assets/images/Piravid.png";

function App() {
  return (
    <div className="App">

      <div className="AppHeader">
        <Header />
      </div>

      <div className="CalenderApp">
          <CalendarComp />
        </div>
        <div className="WeatherApp">
          <WeatherApp />
      </div>
      <div className="SL">
        <header className="SlHeader">
        <img src={Logo} alt="sl-logo" />
          <h2>Avgångar från skolan</h2>
        </header>
        <SL />
      </div>
      <div className="TF">
        <header className="TweetHeader"><h1>Tweets</h1></header>
        <TwitterFeed />
      </div>
      <div className="piravid">
        <h1>Årets lärare 2021</h1>
        <img src={Piravid} alt="" />
      </div>
      <div className="FootWrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
