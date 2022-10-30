import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DisplayLoader from "./components/utils/DisplayLoading"
import LandingPage from "./provider/landingPageProvider";
import PersonalDetailPage from "./provider/personalDetailPageProvider";
import EducationDetailPage from "./provider/educationDetailPageProvider";
import ExperienceDetailPage from "./provider/experienceDetailPageProvider";
import MenuPage from "./provider/menuPageProvider";
import SocialLinkPage from "./provider/socialLinkPageProvider";
import SkillPage from "./provider/skillPageProvider";
import CourseDetailPage from "./provider/courseDetailPageProvider";
import LanguageDetailPage from "./provider/languageDetailPageProvider";
import ReferenceDetailPage from "./provider/referenceDetailPageProvider";
import AwardDetailPage from './provider/awardDetailPageProvider'

import "./stylesheets/app.css";

const App = () => {
  const [resume, setResume] = useState(null)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('resume'))
    if (data != null && Object.keys(data).length > 0) {
      return setResume({ ...data })
    }
    return setResume({
      "personal": {},
      "education": [],
      "experience": [],
      "socialLink": {},
      "skill": [],
      "course": [],
      "language": [],
      "reference": []
  })
  }, [])

  const handleSetResume = (section, formData) => {
    const data = { ...resume }
    data[section] = formData
    setResume(data)
    localStorage.setItem('resume', JSON.stringify(data))
  }

  if (resume == null) {
    return (
      <div className="app">
        <DisplayLoader />
      </div>
    )
  }

  if (resume != null) {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/personal" element={<PersonalDetailPage handleSetResume={handleSetResume} resumeData={resume} />} />
            <Route path="/education" element={<EducationDetailPage handleSetResume={handleSetResume} resumeData={resume} />} />
            <Route path="/experience" element={<ExperienceDetailPage handleSetResume={handleSetResume} resumeData={resume} />} />
            <Route path='/menu' element={<MenuPage resumeData={resume}/>} />
            <Route path='/socialLink' element={<SocialLinkPage handleSetResume={handleSetResume} resumeData={resume} />} />
            <Route path="/skill" element={<SkillPage handleSetResume={handleSetResume} resumeData={resume} />} />
            <Route path="/course" element={<CourseDetailPage handleSetResume={handleSetResume} resumeData={resume} />} />
            <Route path='/language' element={<LanguageDetailPage handleSetResume={handleSetResume} resumeData={resume} />} />
            <Route path='/reference' element={<ReferenceDetailPage handleSetResume={handleSetResume} resumeData={resume} />} />
            <Route path='/award' element={<AwardDetailPage handleSetResume={handleSetResume} resumeData={resume} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
