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
    <div className="container">
      <h1 className="header">Reseplaneraren</h1>
    </div>
  );
};

export default SL;
