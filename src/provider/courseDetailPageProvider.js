import Container from '../container'

import WithCourseDetailPage from '../components/courseDetailPage/WithCourseDetailPage'
import CourseDetailForm from '../components/courseDetailPage/CourseDetailForm'
import CourseDetailList from '../components/courseDetailPage/CourseDetailList'
import staticText from '../utils/staticText'
import validatorFactory from '../utils/validator'
import DatePicker from '../components/utils/DatePicker'
import relocatorFactory from '../utils/relocator'

const c = new Container()

c.setComponent('CourseDetailForm', CourseDetailForm)
c.setComponent('CourseDetailList', CourseDetailList)
c.setComponent('DatePicker', DatePicker)
c.setComponent('staticText', staticText)
c.setInternalModule('validator', validatorFactory)
c.setInternalModule('relocator', relocatorFactory)

const CourseDetailPage = WithCourseDetailPage(c.getContainer())

export default CourseDetailPage