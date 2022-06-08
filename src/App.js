import './App.css';
import Header from "./components/header/Header";
import WeatherApp from './components/weather/WeatherApp';
import CalendarComp from './components/calendar/CalendarComp';
import LiveClock from './components/clock/LiveClock';
import SL from './components/SL/SL';

function App() {
  return (
    <div className="App">
      <Header />
      <WeatherApp />
      <CalendarComp />
      <LiveClock />
      <SL />
    </div>
  );
}

export default App;
