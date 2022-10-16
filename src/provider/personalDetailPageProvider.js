import Container from "../container";

import WithPersonalDetailPage from "../components/personalDetailPage/WithPersonalDetailPage";
import PersonalDetailForm from "../components/personalDetailPage/PersonalDetailForm";
import staticText from "../utils/staticText";
import validatorFactory from "../utils/validator";

const c = new Container()

c.setComponent('PersonalDetailForm', PersonalDetailForm)
c.setComponent('staticText', staticText)
c.setInternalModule('validator', validatorFactory)

const PersonalDetailPage = WithPersonalDetailPage(c.getContainer())

export default PersonalDetailPage