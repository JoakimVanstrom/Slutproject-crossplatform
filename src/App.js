import './App.css';
import Header from "./components/header/Header";
import WeatherApp from './components/weather/WeatherApp';
import CalendarComp from './components/calendar/CalendarComp';
import AnalClock from './components/clock/LiveClock';



function App() {
  return (
    <div className="App">
      <Header />
      <WeatherApp />
      <CalendarComp />
      <AnalClock />
    </div>
  );
}

export default App;
