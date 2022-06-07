import './App.css';
import WeatherApp from './components/WeatherApp';
import LiveClock from './components/clock/LiveClock';


function App() {
  return (
    <div className="App">
      <WeatherApp />
      <LiveClock />
    </div>
  );
}

export default App;
