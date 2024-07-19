/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";
import ClientDetails from "./page objects/clientDetails";



describe('Main Flows E2E Test', () => {
   
    const loginPage = new LoginPage
   const homePage = new HomePage
   const createClientForm = new CreateClientForm
   const clientDetails = new ClientDetails
   var userData = {}
   var newUserData = {}

    it('Create basic entities and check the data', () => {

        ///////////////////////////////////////// Log in and check user data
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        cy.wait(4000) 
        loginPage.assertLoginData()

        ///////////////////////////////////////// Create client and save data in fixture
        homePage.clickNewClient()
        userData = createClientForm.enterClientData('create')
        cy.writeFile('./cypress/fixtures/created-user-data.json', userData)
        cy.wait(4000) 

        ///////////////////////////////////////// Find created client and check the data
        homePage.goToAllClientsUrl()
        homePage.selectFilterType('email')
        homePage.enterSearchTerm(userData.email)
        cy.wait(4000)
        homePage.selectClient()
        clientDetails.assertNewClientData(userData)
       
        ///////////////////////////////////////// Add and check comments 
        let commentValue1 = 'This is an automated comment test.' 
        let commentValue2 = 'This is ANOTHER an automated comment test.'
        clientDetails.openCommentModal()
        clientDetails.addNote(commentValue1)
        clientDetails.sendNote()
        cy.wait(4000)
        clientDetails.openComments()
        clientDetails.assertComment(commentValue1)
        clientDetails.openCommentModal2()
        clientDetails.addNote(commentValue2)
        clientDetails.sendNote()
        clientDetails.assertComment(commentValue2)
        clientDetails.openSecondComment()
        clientDetails.assertSecondComment(commentValue1)
        clientDetails.closeModal()

        ///////////////////////////////////////// Send and check chat messages
        let message1 = 'Testing the chat'
        let message2 = 'This is another chat'
        clientDetails.submitMessage(message1)
        cy.wait(2000)
        clientDetails.assertChatMessages(0, message1)
        clientDetails.submitMessage(message2)
        cy.wait(2000)
        clientDetails.assertChatMessages(1, message2)
        //clientDetails.deleteMessage() --> need to solve selector

        /////////////////////////////////////////  Upload and check files
        let note = 'This is a test note'
        let path = 'cypress/e2e/page objects/shile.png'
     clientDetails.clickDocsTab()
        cy.wait(4000)   
        clientDetails.openFileModal()
        clientDetails.selectFile(path)
        clientDetails.addNote(note)
        clientDetails.uploadFile()
        cy.wait(4000)
        clientDetails.openFileDetail()
        clientDetails.assertFileName(path)
        clientDetails.closeFileModal()

        ///////////////////////////////////////// File Menu
        note = 'This is a SECOND test note' 
        clientDetails.openFileMenu()
        clientDetails.assertFileMenu()
        clientDetails.openNotes()
        clientDetails.openAddNoteModal()
        clientDetails.addNote(note)
        clientDetails.uploadFile()
        //clientDetails.assertComment(note)
        clientDetails.closeModal()
    });

    it('Edit entities data', () => {

        ///////////////////////////////////////// Login
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        cy.wait(4000)

        ///////////////////////////////////////// Filter and check last created client
        homePage.goToAllClientsUrl()
        homePage.selectFilterType('email')
        homePage.enterSearchTerm(userData.email)
        cy.wait(4000)
        homePage.selectClient()
        cy.log(userData)
        clientDetails.assertNewClientData(userData)

        ///////////////////////////////////////// Edit client and check data
        clientDetails.openEditModal()
        clientDetails.assertModalInfo(userData)
        clientDetails.clickEditButton()
        newUserData = createClientForm.enterClientData('edit', userData)
        cy.log(newUserData)
        clientDetails.assertNewClientData(newUserData)
        cy.writeFile('./cypress/fixtures/created-user-data.json', newUserData)
        cy.wait(4000)

        ///////////////////////////////////////// Edit file and check data
        clientDetails.clickDocsTab()
        cy.wait(4000)
        clientDetails.openFileDetail()
        let newName = clientDetails.editFile('New Name')
        clientDetails.openFileDetail()
        clientDetails.assertFileName(newName)
        clientDetails.closeFileModal()
        


    });
    
});