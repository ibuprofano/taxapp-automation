/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";
import ClientDetails from "./page objects/clientDetails";



describe('Edit File Information', () => {
   const loginPage = new LoginPage
   const homePage = new HomePage
   const clientDetails = new ClientDetails
   //const createClientForm = new CreateClientForm
    it('Edit File Info', () => {
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        homePage.selectFilterType('email')
        homePage.enterSearchTerm('gonzalo.roland+rgb1')
        homePage.selectClient()
        cy.wait(4000)
        clientDetails.clickDocsTab()
        cy.wait(4000)
        //clientDetails.openFile('shile.png')
        clientDetails.editFile()






        
    });
    
});