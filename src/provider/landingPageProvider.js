import Container from "../container";

import WithLandingPage from "../components/landingPage/WithLandingPage"
import LandingPageForm from "../components/landingPage/LandingPageForm";
import staticText from "../utils/staticText";

import { useNavigate } from "react-router-dom";

const c = new Container()

c.setComponent('LandingPageForm', LandingPageForm)
c.setComponent('staticText', staticText)
c.setExternalModule('useNavigate', useNavigate)

const LandingPage = WithLandingPage(c.getContainer())

export default LandingPage