import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./provider/landingPageProvider";
import PersonalDetailPage from "./provider/personalDetailPageProvider";
import EducationDetailPage from "./provider/educationDetailPageProvider";
import ExperienceDetailPage from "./provider/experienceDetailPageProvider";
import MenuPage from "./provider/menuPageProvider";
import SocialLinkPage from "./provider/socialLinkPageProvider";

import "./stylesheets/app.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/personalDetail" element={<PersonalDetailPage />} />
          <Route path="/educationDetail" element={<EducationDetailPage />} />
          <Route path="/experienceDetail" element={<ExperienceDetailPage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/socialLink' element={<SocialLinkPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
