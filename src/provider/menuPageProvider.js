import Container from "../container";

import WithMenuPage from "../components/menuPage/WithMenuPage";
import MenuList from "../components/menuPage/MenuList";
import staticText from "../utils/staticText";

import { useNavigate } from "react-router-dom";

const c = new Container()

c.setComponent('MenuList', MenuList)
c.setComponent('staticText', staticText)
c.setExternalModule('useNavigate', useNavigate)

const MenuPage = WithMenuPage(c.getContainer())

export default MenuPage