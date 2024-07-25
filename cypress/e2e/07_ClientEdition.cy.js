/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";
import ClientDetails from "./page objects/clientDetails";
describe('Client Edition', () => {
    before(() => {
        cy.fixture('created-user-data.json').then((data) => {
            globalThis.data = data;
        })
    })
   const loginPage = new LoginPage
   const homePage = new HomePage
   const clientDetails = new ClientDetails
   const createClientForm = new CreateClientForm
   var newUserData = {}
   beforeEach(() => {
    loginPage.login()
    homePage.accessClientDetails(data)
    })
    it('Edit and check client info', () => {
        clientDetails.openEditModal()
        clientDetails.assertModalInfo(data)
        clientDetails.clickEditButton()
        newUserData = createClientForm.enterClientData('edit', data)
        cy.wait(4000)
        clientDetails.assertNewClientData(newUserData)
        cy.writeFile('./cypress/fixtures/created-user-data.json', newUserData)
        cy.wait(4000)
    });
    
});