import { useEffect, useState } from "react";
import * as API from "./API";
import "./SL.css";

const SL = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await API.getData();
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="reseplaneraren">
        <h2 className="header">Avgångar</h2>
      </div>
    </div>
  );
};

export default SL;
