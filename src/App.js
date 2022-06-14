import "./App.css";
import Header from "./components/header/Header";
import WeatherApp from "./components/weather/WeatherApp";
import CalendarComp from "./components/calendar/CalendarComp";

import SL from "./components/SL/SL";
import TwitterFeed from "./components/twitter/TwitterFeed";
import Footer from "./components/footer/Footer";

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
        <SL />
      </div>
      <div className="TF">
        <div className="TweetHeader"><h1>Tweets</h1></div>
        <TwitterFeed />
      </div>
      <div className="FootWrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
