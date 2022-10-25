import Container from '../container'

import WithAwardDetailPage from '../components/awardDetailPage/WithAwardDetailPage'
import AwardDetailList from '../components/awardDetailPage/AwardDetailList'
import AwardDetailForm from '../components/awardDetailPage/AwardDetailForm'
import staticText from '../utils/staticText'
import validatorFactory from '../utils/validator'
import DatePicker from '../components/utils/DatePicker'

const c = new Container()

c.setComponent('AwardDetailForm', AwardDetailForm)
c.setComponent('AwardDetailList', AwardDetailList)
c.setComponent('DatePicker', DatePicker)
c.setComponent('staticText', staticText)
c.setInternalModule('validator', validatorFactory)

const AwardDetailPage = WithAwardDetailPage(c.getContainer())

export default AwardDetailPage