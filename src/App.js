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

      <div className="right-side-container">
        <div className="right-side-content">
        
          <CalendarComp />
          <WeatherApp />
        </div>
      </div>
      <div className="SL">
    
        <SL />
      </div>
      <div className="TF">
        <TwitterFeed />
      </div>
        <Footer />
    </div>
  );
}

export default App;
