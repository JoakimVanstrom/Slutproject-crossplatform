import "./LiveClock.css";
import Clock from "react-live-clock";

const liveClock = () => {
  return (
    <div className="live-clock">
      <div className="clock-container">
      <Clock format={"HH:mm:ss"} ticking={true} />
      </div>
      
    </div>
  );
};

export default liveClock;
