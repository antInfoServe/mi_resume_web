import Container from '../container'

import WithReferenceDetailPage from '../components/referenceDetailPage/WithReferenceDetailPage'
import ReferenceDetailList from '../components/referenceDetailPage/ReferenceDetailList'
import ReferenceDetailForm from '../components/referenceDetailPage/ReferenceDetailForm'
import staticText from '../utils/staticText'
import validatorFactory from '../utils/validator'

const c = new Container()

c.setComponent('ReferenceDetailForm', ReferenceDetailForm)
c.setComponent('ReferenceDetailList', ReferenceDetailList)
c.setComponent('staticText', staticText)
c.setInternalModule('validator', validatorFactory)

const ReferenceDetailPage = WithReferenceDetailPage(c.getContainer())

export default ReferenceDetailPage