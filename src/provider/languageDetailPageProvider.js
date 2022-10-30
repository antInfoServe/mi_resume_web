import Container from '../container'

import WithLanguageDetailPage from '../components/languageDetailPage/WithLanguageDetailPage'
import LanguageDetailList from '../components/languageDetailPage/LanguageDetailList'
import LanguageDetailForm from '../components/languageDetailPage/languageDetailForm'
import staticText from '../utils/staticText'
import validatorFactory from '../utils/validator'
import relocatorFactory from '../utils/relocator'

const c = new Container()

c.setComponent('LanguageDetailForm', LanguageDetailForm)
c.setComponent('LanguageDetailList', LanguageDetailList)
c.setComponent('staticText', staticText)
c.setInternalModule('validator', validatorFactory)
c.setInternalModule('relocator', relocatorFactory)

const LanguageDetailPage = WithLanguageDetailPage(c.getContainer())

export default LanguageDetailPage