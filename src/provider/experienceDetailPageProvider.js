import Container from '../container'

import WithExperienceDetailPage from '../components/experienceDetailPage/WithExperienceDetailPage'
import ExperienceDetailForm from '../components/experienceDetailPage/ExperienceDetailForm'
import ExperienceDetailList from '../components/experienceDetailPage/ExperienceDetailList'
import staticText from '../utils/staticText'
import validatorFactory from '../utils/validator'
import DatePicker from '../components/utils/DatePicker'

const c = new Container()

c.setComponent('ExperienceDetailForm', ExperienceDetailForm)
c.setComponent('ExperienceDetailList', ExperienceDetailList)
c.setComponent('DatePicker', DatePicker)
c.setComponent('staticText', staticText)
c.setInternalModule('validator', validatorFactory)

const ExperienceDetailPage = WithExperienceDetailPage(c.getContainer())

export default ExperienceDetailPage