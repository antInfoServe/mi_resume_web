import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./provider/landingPageProvider";


import "./stylesheets/app.css";

const user = React.createContext([])

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
