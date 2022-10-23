import Container from "../container";

import WithSkillPage from "../components/skillPage/WithSkillPage";
import SkillList from "../components/skillPage/SkillList";
import staticText from "../utils/staticText";
import validatorFactory from "../utils/validator";

import { useNavigate } from "react-router-dom";

const c = new Container()

c.setComponent('SkillList', SkillList)
c.setComponent('staticText', staticText)
c.setInternalModule('validator', validatorFactory)
c.setExternalModule('useNavigate', useNavigate)

const SkillPage = WithSkillPage(c.getContainer())

export default SkillPage