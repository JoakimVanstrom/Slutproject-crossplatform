import './App.css';
import WeatherApp from './components/weather/WeatherApp';
import LiveClock from './components/clock/LiveClock';
import CalendarComp from './components/calendar/CalendarComp';


function App() {
  return (
    <div className="App">
      <LiveClock />
      <WeatherApp />
      <CalendarComp />
    </div>
  );
}

export default App;
