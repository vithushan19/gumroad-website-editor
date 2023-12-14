import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Website from "./components/website";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website/:id" element={<Website />} />
      </Routes>
    </div>
  );
}

export default App;
