/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";
import ClientDetails from "./page objects/clientDetails";
describe('Client Creation', () => {
   const loginPage = new LoginPage
   const homePage = new HomePage
   const createClientForm = new CreateClientForm
   const clientDetails = new ClientDetails
   var userData = {}
   var newUserData = {}
   beforeEach(() => {
    loginPage.login()
   })
    it('Create client', () => {
        homePage.clickNewClient()
        userData = createClientForm.enterClientData('create')
        cy.writeFile('./cypress/fixtures/created-user-data.json', userData)
        cy.wait(4000)    
    });
    it('Check new client data', () => {
        homePage.goToAllClientsUrl()
        homePage.selectFilterType('email')
        homePage.enterSearchTerm(userData.email)
        cy.wait(4000)
        homePage.selectClient()
        clientDetails.assertNewClientData(userData)       
    });
    
});