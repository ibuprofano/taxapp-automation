/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";
import ClientDetails from "./page objects/clientDetails";
import CreateReceipt from "./page objects/createReceiptModal";



describe('Add Comment', () => {
   const loginPage = new LoginPage
   const homePage = new HomePage
   const clientDetails = new ClientDetails
   //const createClientForm = new CreateClientForm
   const createReceipt = new CreateReceipt


    it('View Comment', () => {
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        cy.wait(4000)
        homePage.goToAllClientsUrl()
        //homePage.selectAllClients() //Add to all other tests
        homePage.selectFilterType('email')
        homePage.enterSearchTerm('gonzalo.roland+666')
        cy.wait(4000)
        homePage.selectClient()
        cy.wait(4000)
        clientDetails.clickReceiptsTab()
        clientDetails.clickCreateReceipt()
        //createReceipt.openReceiptTypeModal()
        createReceipt.selectReceiptType('copyReceipt')
        createReceipt.clickNext()







        
    });
    
});