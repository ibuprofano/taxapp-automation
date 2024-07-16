/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";



describe('Login and Create a Client', () => {
   const loginPage = new LoginPage
   const homePage = new HomePage
   const createClientForm = new CreateClientForm
    it('Login', () => {
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        cy.get('h2').should('have.text', 'Matias Diego test')
        /* homePage.clickNewClient()
        homePage.addSsn(Math.floor(Math.random() * 1000000000))    
        homePage.clickNext()
        createClientForm.enterFirstName()
        createClientForm.enterLastName()
        createClientForm.enterDob()
        createClientForm.enterZipCode()
        createClientForm.enterAddress1()
        createClientForm.enterAddress2()
        createClientForm.enterPhone()
        createClientForm.selectTaxPrepper()
        createClientForm.enterRefReceipt()
        createClientForm.enterEmail()
        createClientForm.selectLanguage('english')
        createClientForm.clickCreate()
        createClientForm.clickConfirm() */




        
    });
    
});