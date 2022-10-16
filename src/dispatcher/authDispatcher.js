import Cookies from "universal-cookie";

const authDispatcherFactory = (container) => new AuthDispatcher(container);

class AuthDispatcher {
  constructor(con) {
    this.validator = con.validator;
    this.cookies = new Cookies();
    this.url = new URL(con.config().getValue('baseUrl') + '/user/')
    this.apiRequestModel = con.apiRequestModel
    this.onAuthStateChanged = con.onAuthStateChanged
    this.auth = con.auth
    this.createUserWithEmailAndPassword = con.createUserWithEmailAndPassword
    this.signInWithEmailAndPassword = con.signInWithEmailAndPassword
    this.sendEmailVerification = con.sendEmailVerification
    this.sendPasswordResetEmail = con.sendPasswordResetEmail
  }

  async signUp(data, role) {
    try {
      this.validator().name(data.yourName)
      this.validator().orgName(data.orgName)
      this.validator().emailId(data.emailId)
      this.validator().password(data.password, data.reEnterPassword)

      const res = await this.createUserWithEmailAndPassword(this.auth, data.emailId, data.password)
      const user = await this.setCustomClaim({
        role,
        orgName: data.orgName
      }, await res.user.getIdToken());
      await this.verifyEmail()
      return user
    } catch (e) {
      console.log(e)
      throw new Error(e.message)
    }
  }

  async verifyEmail(){
    try{
      await this.sendEmailVerification(this.auth.currentUser)
    } catch(e){
      throw new Error(e.message)
    }
  }

  async signIn(data) {
    try {
      this.validator().emailId(data.emailId)
      this.validator().password(data.password, data.password)

      const res = await this.signInWithEmailAndPassword(this.auth, data.emailId, data.password)
      return res.user
    } catch (e) {
      throw new Error(e.message)
    }
  }

  async resetPassword(data){
    try{
      this.validator().emailId(data.emailId)
      await this.sendPasswordResetEmail(this.auth, data.emailId)
      return true
    } catch(e){
      throw new Error(e.message)
    }
  }

  async getToken() {
    this.onAuthStateChanged(this.container.auth, async (user) => {
      if (user != null) {
        const idToken = await user.getIdToken();
        this.cookies.set("idToken", window.btoa(idToken), { path: "/" });
        return;
      }
    });
  }

  async signOut() {
    try {
      await this.auth.signOut();
      this.cookies.remove("idToken");
      window.location.reload();
    } catch (e) {
      throw new Error(e.message)
    }
  }

  async setCustomClaim(data, idToken) {
    try{
      const url = new URL('setCustomClaim', this.url)
      console.log(url)
      const req = this.apiRequestModel().setHttpMethod('POST').setBody(data).setAuth(idToken)
      console.log(req)
      return await this.fetch(url, req)
    }catch(e){
      throw new Error(e.message)
    }

  }

  async fetch(url, req) {
    const res = await fetch(url, req)
    if (!res.ok) {
      throw new Error(`${res.text()}`)
    }
    return await res.json()
  }
}

export default authDispatcherFactory;
