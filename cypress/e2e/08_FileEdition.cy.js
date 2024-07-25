/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";
import ClientDetails from "./page objects/clientDetails";



describe('Edit and check File Information', () => {
    before(() => {
        cy.fixture('created-user-data.json').then((data) => {
            globalThis.data = data;
        })
    })
   const loginPage = new LoginPage
   const homePage = new HomePage
   const clientDetails = new ClientDetails
   beforeEach(() => {
    loginPage.login()
    homePage.accessClientDetails(data)
    clientDetails.clickDocsTab()
    cy.wait(4000)
    })
   
    it('Edit and check File Info', () => {
        //let string = cy.get('[target]').innerText()
        //let ext = string.substring(string.indexOf(".") + 1)
        clientDetails.openFileDetail()
        let newName = clientDetails.editFile('New Name')
        clientDetails.openFileDetail()
        clientDetails.assertFileName(newName)
        clientDetails.closeFileModal()
        //clientDetails.assertFileNameInList(newName)
        
     
    });
    
});