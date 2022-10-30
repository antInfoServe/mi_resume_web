import Container from '../container'

import WithEducationDetailPage from '../components/educationDetailPage/WithEducationDetailPage'
import EducationDetailForm from '../components/educationDetailPage/EducationDetailForm'
import EducationDetailList from '../components/educationDetailPage/EducationDetailList'
import staticText from '../utils/staticText'
import validatorFactory from '../utils/validator'
import parserFactory from '../utils/parser'
import relocatorFactory from '../utils/relocator'
import DatePicker from '../components/utils/DatePicker'

const c = new Container()

c.setComponent('EducationDetailForm', EducationDetailForm)
c.setComponent('EducationDetailList', EducationDetailList)
c.setComponent('DatePicker', DatePicker)
c.setComponent('staticText', staticText)
c.setInternalModule('validator', validatorFactory)
c.setInternalModule('parser', parserFactory)
c.setInternalModule('relocator', relocatorFactory)

const EducationDetailPage = WithEducationDetailPage(c.getContainer())

export default EducationDetailPage