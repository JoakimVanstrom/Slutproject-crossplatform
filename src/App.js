import './App.css';
import Header from "./components/header/Header";
import WeatherApp from './components/weather/WeatherApp';
import LiveClock from './components/clock/LiveClock';
import CalendarComp from './components/calendar/CalendarComp';



function App() {
  return (
    <div className="App">
      <Header />
      <LiveClock />
      <WeatherApp />
      <CalendarComp />
     
    </div>
  );
}

export default App;
