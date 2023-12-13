import "./App.css";
import axios from "axios";
import Websites from "./components/websites";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1/websites";

function getApiData() {
  return axios
    .get(API_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.error(error));
}

function App() {
  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    getApiData().then((data) => setWebsites(data));
  }, []);

  return (
    <div className="App">
      <h1>Website Editor</h1>
      <Websites websites={websites} />
    </div>
  );
}

export default App;
