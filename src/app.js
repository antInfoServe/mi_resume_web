import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./provider/landingPageProvider";
import PersonalDetailPage from "./provider/personalDetailPageProvider";
import EducationDetailPage from "./provider/educationDetailPageProvider";
import ExperienceDetailPage from "./provider/experienceDetailPageProvider";
import MenuPage from "./provider/menuPageProvider";
import SocialLinkPage from "./provider/socialLinkPageProvider";
import SkillPage from "./provider/skillPageProvider";
import CourseDetailPage from "./provider/courseDetailPageProvider";
import LanguageDetailPage from "./provider/languageDetailPageProvider";
import ReferenceDetailPage from "./provider/experienceDetailPageProvider copy";

import "./stylesheets/app.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/personal" element={<PersonalDetailPage />} />
          <Route path="/education" element={<EducationDetailPage />} />
          <Route path="/experience" element={<ExperienceDetailPage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/socialLink' element={<SocialLinkPage />} />
          <Route path="/skill" element={<SkillPage />} />
          <Route path="/course" element={<CourseDetailPage />} />
          <Route path='/language' element={<LanguageDetailPage />} />
          <Route path='/reference' element={<ReferenceDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
