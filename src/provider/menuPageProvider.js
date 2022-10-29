import Container from "../container";

import WithMenuPage from "../components/menuPage/WithMenuPage";
import MenuList from "../components/menuPage/MenuList";
import DownloadResume from "../components/menuPage/DownloadResume";
import staticText from "../utils/staticText";
import StandardResumeDoc from "../components/resumeDocuments/StandardResumeDoc";

import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";

const c = new Container()

c.setComponent('MenuList', MenuList)
c.setComponent('staticText', staticText)
c.setComponent('DownloadResume', DownloadResume)
c.setComponent('StandardResumeDoc', StandardResumeDoc)
c.setExternalModule('useNavigate', useNavigate)
c.setExternalModule('PDFDownloadLink', PDFDownloadLink)

const MenuPage = WithMenuPage(c.getContainer())

export default MenuPage