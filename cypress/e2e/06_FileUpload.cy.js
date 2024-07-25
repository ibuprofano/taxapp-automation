/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import ClientDetails from "./page objects/clientDetails";
describe('File Upload', () => {
    before(() => {
        cy.fixture('created-user-data.json').then((data) => {
            globalThis.data = data;
        })
    })
   const loginPage = new LoginPage
   const homePage = new HomePage
   const clientDetails = new ClientDetails
   let note = 'This is a test note'
   let path = 'cypress/e2e/page objects/shile.png'
   beforeEach(() => {
    loginPage.login()
    homePage.accessClientDetails(data)
    clientDetails.clickDocsTab()
    cy.wait(4000)
    })
    it('Upload File and Check', () => {
        clientDetails.openFileModal()
        clientDetails.selectFile(path)
        clientDetails.addNote(note)
        clientDetails.uploadFile()
        cy.wait(4000)
        clientDetails.openFileDetail()
        clientDetails.assertFileName(path)
        clientDetails.closeFileModal()         
    });
    it('Check File again', () => {
        clientDetails.openFileDetail()
        clientDetails.assertFileName(path)
    })
    it('Check File Menu and add another note', () => {
        note = 'This is a SECOND test note' 
        clientDetails.openFileMenu()
        clientDetails.assertFileMenu()
        clientDetails.openNotes()
        clientDetails.openAddNoteModal()
        clientDetails.addNote(note)
        clientDetails.uploadFile()
    })
    
});