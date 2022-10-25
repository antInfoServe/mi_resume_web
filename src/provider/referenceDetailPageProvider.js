import Container from '../container'

import WithReferenceDetailPage from '../components/referenceDetailPage/WithReferenceDetailPage'
import ReferenceDetailList from '../components/referenceDetailPage/ReferenceDetailList'
import ReferenceDetailForm from '../components/referenceDetailPage/ReferenceDetailForm'
import staticText from '../utils/staticText'
import validatorFactory from '../utils/validator'

import { useNavigate } from "react-router-dom";


const c = new Container()

c.setComponent('ReferenceDetailForm', ReferenceDetailForm)
c.setComponent('ReferenceDetailList', ReferenceDetailList)
c.setComponent('staticText', staticText)
c.setInternalModule('validator', validatorFactory)
c.setExternalModule('useNavigate', useNavigate)

const ReferenceDetailPage = WithReferenceDetailPage(c.getContainer())

export default ReferenceDetailPage