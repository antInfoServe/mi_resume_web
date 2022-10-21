import Container from "../container";

import WithSocialLinkPage from "../components/socialLinksPage/WithSocialLinkPage";
import SocialLinkForm from "../components/socialLinksPage/SocialLinkForm";
import staticText from "../utils/staticText";

import { useNavigate } from "react-router-dom";

const c = new Container()

c.setComponent('SocialLinkForm', SocialLinkForm)
c.setComponent('staticText', staticText)
c.setExternalModule('useNavigate', useNavigate)

const SocialLinkPage = WithSocialLinkPage(c.getContainer())

export default SocialLinkPage