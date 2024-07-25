/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";
import ClientDetails from "./page objects/clientDetails";



describe('Chat Messages', () => {
    before(() => {
        cy.fixture('created-user-data.json').then((data) => {
            globalThis.data = data;
        })
    })
   const loginPage = new LoginPage
   const homePage = new HomePage
   const clientDetails = new ClientDetails
   let message1 = 'Testing the chat'
   let message2 = 'This is another chat'
   beforeEach(() => {
    loginPage.login()
    homePage.accessClientDetails(data)
    cy.wait(4000)
   })
   it('Send Chat Messages', () => {
    clientDetails.submitMessage(message1)
    cy.wait(2000)
    clientDetails.assertChatMessages(0, message1)
    clientDetails.submitMessage(message2)
    cy.wait(2000)
    clientDetails.assertChatMessages(1, message2)
    //clientDetails.deleteMessage() --> need to solve selector
    });
    it('Check chat messages again', () => {
        clientDetails.assertChatMessages(0, message1)
        clientDetails.assertChatMessages(1, message2)
    })
    
});