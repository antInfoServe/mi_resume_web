import Container from '../container'

import WithExperienceDetailPage from '../components/experienceDetailPage/WithExperienceDetailPage'
import ExperienceDetailForm from '../components/experienceDetailPage/ExperienceDetailForm'
import ExperienceDetailList from '../components/experienceDetailPage/ExperienceDetailList'
import staticText from '../utils/staticText'
import validatorFactory from '../utils/validator'
import DatePicker from '../components/utils/DatePicker'
import parserFactory from '../utils/parser'

const c = new Container()

c.setComponent('ExperienceDetailForm', ExperienceDetailForm)
c.setComponent('ExperienceDetailList', ExperienceDetailList)
c.setComponent('DatePicker', DatePicker)
c.setComponent('staticText', staticText)
c.setInternalModule('validator', validatorFactory)
c.setInternalModule('parser', parserFactory)

const ExperienceDetailPage = WithExperienceDetailPage(c.getContainer())

export default ExperienceDetailPage