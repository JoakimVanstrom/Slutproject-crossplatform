import "./App.css";
import Header from "./components/header/Header";
import WeatherApp from "./components/weather/WeatherApp";
import CalendarComp from "./components/calendar/CalendarComp";
import LiveClock from "./components/clock/LiveClock";
import SL from "./components/SL/SL"
import TwitterFeed from "./components/twitter/TwitterFeed";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="right-side-container">
        <div className="right-side-content">
          <WeatherApp />
          <CalendarComp />
          <LiveClock />
        </div>
      </div>
      <SL />
      <div>
      <TwitterFeed />
      </div>
    </div>
  );
}

export default App;
