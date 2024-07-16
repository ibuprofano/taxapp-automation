/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";
import ClientDetails from "./page objects/clientDetails";



describe('Add Comment', () => {
   const loginPage = new LoginPage
   const homePage = new HomePage
   const clientDetails = new ClientDetails
   //const createClientForm = new CreateClientForm
    it('Add Coment', () => {
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        cy.wait(4000)
        homePage.goToAllClientsUrl()
        //homePage.selectAllClients() //Add to all other tests
        homePage.selectFilterType('email')
        homePage.enterSearchTerm('gonzalo.roland+rgb1@rootstrap.com')
        homePage.selectClient()
        cy.wait(4000)
        clientDetails.openCommentModal()
        clientDetails.addNote()
        clientDetails.uploadFile()
        






        
    });

    it('View Comment', () => {
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        homePage.goToAllClientsUrl()
        //homePage.selectAllClients() //Add to all other tests
        homePage.selectFilterType('email')
        homePage.enterSearchTerm('gonzalo.roland+rgb1@rootstrap.com')
        cy.wait(4000)
        homePage.selectClient()
        cy.wait(4000)
        clientDetails.openComments()
        clientDetails.closeModal()
        






        
    });
    
});