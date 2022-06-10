import React, { useState, useEffect } from "react";

const IG = () => {
/*   const ig = require('instagram-scraping');

  ig.scrapeTag('ithskorv').then((result) => {
    console.dir(result);
  }); */

  const [data, setData] = useState([]);

  const URL = "https://www.instagram.com/explore/tags/ith%C3%B6gskolan/?__a=1";

  useEffect(() => {
    const fetchURL = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
    }
    fetchURL();
  }, [URL]);

}

export default IG;

