import { useEffect, useState } from "react";
import * as API from "./API";
import "./SL.scss";


const SL = () => {
  const [data, setData] = useState([]);

  async function fetchSL() {
    const res = await API.getData();
    setData(res.data.Departure);
  }

 useEffect(() => {
    fetchSL();
    setInterval(() => {
      fetchSL();
    }, 60000);
  }, []);

  if (data.length > 10) {
    setData(data.slice(0, 10));
  }

  return (
    <div className="SlApp">
      <div className="reseplaneraren">
        <div className="traffic">
          {data.map((item) => (
            <ul className="traffic-box" key={item.JourneyDetailRef.ref}>
              <strong>
                {" "}
                <li className="traffic-name">{item.name}</li>{" "}
              </strong>
              <li className="traffic-time"> Avgång {item.time}</li>
              <li className="traffic-direction"> mot {item.direction}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SL;
