import Container from '../container'

import WithAwardDetailPage from '../components/awardDetailPage/WithAwardDetailPage'
import AwardDetailList from '../components/awardDetailPage/AwardDetailList'
import AwardDetailForm from '../components/awardDetailPage/AwardDetailForm'
import staticText from '../utils/staticText'
import validatorFactory from '../utils/validator'
import parserFactory from '../utils/parser'
import DatePicker from '../components/utils/DatePicker'
import relocatorFactory from '../utils/relocator'

const c = new Container()

c.setComponent('AwardDetailForm', AwardDetailForm)
c.setComponent('AwardDetailList', AwardDetailList)
c.setComponent('DatePicker', DatePicker)
c.setComponent('staticText', staticText)
c.setInternalModule('validator', validatorFactory)
c.setInternalModule('parser', parserFactory)
c.setInternalModule('relocator', relocatorFactory)

const AwardDetailPage = WithAwardDetailPage(c.getContainer())

export default AwardDetailPage