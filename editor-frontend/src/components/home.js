import React, { useEffect, useState } from "react";
import Websites from "./websites";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/websites";

function getApiData() {
  return axios
    .get(API_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error));
}

function Home() {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    getApiData().then((data) => setWebsites(data));
  }, []);
  return (
    <div>
      <h1>Website Editor</h1>
      <Websites websites={websites} />
    </div>
  );
}

export default Home;
