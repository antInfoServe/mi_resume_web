import Container from '../container'

import WithEducationDetailPage from '../components/educationDetailPage/WithEducationDetailPage'
import EducationDetailForm from '../components/educationDetailPage/EducationDetailForm'
import EducationDetailList from '../components/educationDetailPage/EducationDetailList'
import staticText from '../utils/staticText'
import validatorFactory from '../utils/validator'
import DatePicker from '../components/utils/DatePicker'

const c = new Container()

c.setComponent('EducationDetailForm', EducationDetailForm)
c.setComponent('EducationDetailList', EducationDetailList)
c.setComponent('DatePicker', DatePicker)
c.setComponent('staticText', staticText)
c.setInternalModule('validator', validatorFactory)

const EducationDetailPage = WithEducationDetailPage(c.getContainer())

export default EducationDetailPage