import { useState, useEffect } from "react";

const IG = () => {
  const [Posts, setPosts] = useState([
    { name: "Loading...", username: "Loading...", text: "Loading..." },
  ]);

  async function fetchNetlify() {
    fetch("https://roaring-cactus-4a1a3c.netlify.app/.netlify/functions/apihandler")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    setInterval(() => {
      fetchNetlify();
    }, 10000);
  }, []);

  return (
    <div className="Widget News">
      {Posts.map((post, index) => {
        return (
          <div key={index}>
            <div>
          
              <h3>{post.name}</h3>
             
            </div>
            <div>
              <p>{post.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IG;
