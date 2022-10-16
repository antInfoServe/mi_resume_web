import Container from "../container";

import WithLandingPage from "../components/LandingPage/withLandingPage"
import LandingPageForm from "../components/LandingPage/LandingPageForm";
import staticText from "../utils/staticText";

const c = new Container()

c.setComponent('LandingPageForm', LandingPageForm)
c.setComponent('staticText', staticText)

const LandingPage = WithLandingPage(c.getContainer())

export default LandingPage