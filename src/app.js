import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./provider/landingPageProvider";
import PersonalDetailPage from "./provider/personalDetailPageProvider";


import "./stylesheets/app.css";

const user = React.createContext([])

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="personalDetail" element={<PersonalDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
