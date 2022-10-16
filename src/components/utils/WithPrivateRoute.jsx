import React from "react";
import { auth, onAuthStateChanged } from "../../firebase"
import Cookies from "universal-cookie"
import { Navigate } from "react-router-dom"

import authDispatcherFactory from "../../dispatcher/authDispatcher"

import Container from "../../container";

const c = new Container()
const cookie = new Cookies()

c.setInternalModule('authDispatcher', authDispatcherFactory)
c.setExternalModule('Cookies', Cookies)
c.setExternalModule('auth', auth)
c.setExternalModule('onAuthStateChanged', onAuthStateChanged)

const PrivateRoute = ({children}) => {
    let isUser = false
    const container = c.getContainer()
    container.authDispatcher().getIdToken()
    if(container.authDispatcher().getVerificationId()){
        isUser = true
    } else if(cookie.get("idToken")){
        isUser = true
    }
    return isUser ? children : <Navigate to="/" />
}

export default PrivateRoute