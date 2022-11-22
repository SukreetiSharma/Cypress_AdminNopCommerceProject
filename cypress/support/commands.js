import Login from "../Pages/Login"
import Logout from "../Pages/Logout"

const login = new Login()
const logout = new Logout();

Cypress.Commands.add('LoginDashboard', (originalFn, url, options) => {
    login.navigate();
 })
 
 Cypress.Commands.add('logout', (originalFn, url, options) => {
    logout.LogoutPage();
 })