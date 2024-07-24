/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
describe('Login and check logged user data', () => {
   const loginPage = new LoginPage
    it('Login', () => {
        // Log in and check user data
        loginPage.login()
        loginPage.assertLoginData()
    });
    
});