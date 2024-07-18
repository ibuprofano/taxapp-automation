/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";
import ClientDetails from "./page objects/clientDetails";



describe('Add Comment', () => {
   const loginPage = new LoginPage
   const homePage = new HomePage
   const clientDetails = new ClientDetails
   //const createClientForm = new 
   let commentValue1 = 'This is an automated comment test.' //This can be edited, will try to randomize in the 
   let commentValue2 = 'This is ANOTHER an automated comment test.'
   before(function(){
    cy.fixture('/created-user-data.json').then(function(data){
        //this.data = data
        globalThis.data = data
    })
   })
    it('Add Coment', () => {
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        cy.wait(4000)
        homePage.goToAllClientsUrl()
        //homePage.selectAllClients() //Add to all other tests
        homePage.selectFilterType('email')
        homePage.enterSearchTerm(data.email)
        cy.wait(4000)
        homePage.selectClient()
        cy.wait(4000)
        clientDetails.openCommentModal()
        //var commentValue = 'This is an automated comment test.' //This can be edited, will try to randomize in the future
        clientDetails.addNote(commentValue1)
        clientDetails.sendNote()
        //clientDetails.openComments()
        cy.wait(4000)





 
        
    });

    it('View Comment and add another', () => {
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        cy.wait(4000)
        homePage.goToAllClientsUrl()
        //homePage.selectAllClients() //Add to all other tests
        homePage.selectFilterType('email')
        homePage.enterSearchTerm(data.email)
        cy.wait(4000)
        homePage.selectClient()
        cy.wait(4000)
        clientDetails.openComments()
        cy.get('.border-l.border-l-4.border-l-primary-500.border-t.cursor-pointer.flex.flex-col.gap-2.justify-between.p-4.w-full > .h-8.max-w-prose.text-start.text-xs.truncate.whitespace-pre').should('have.text', commentValue1)
        cy.get("[class='whitespace-pre text-sm text-blueGray-700']").should('have.text', commentValue1)
        clientDetails.openCommentModal2()
        clientDetails.addNote(commentValue2)
        clientDetails.sendNote()
        cy.get('.border-l.border-l-4.border-l-primary-500.border-t.cursor-pointer.flex.flex-col.gap-2.justify-between.p-4.w-full > .h-8.max-w-prose.text-start.text-xs.truncate.whitespace-pre').should('have.text', commentValue2)
        cy.get("[class='whitespace-pre text-sm text-blueGray-700']").should('have.text', commentValue2)
        cy.get(':nth-child(3) > .h-8').should('have.text', commentValue1).click()
        cy.get("[class='whitespace-pre text-sm text-blueGray-700']").should('have.text', commentValue1)
        cy.get("[class='z-10 flex gap-4 border-t bg-white p-6'] [type='submit']:nth-of-type(1)").click()



        //clientDetails.closeModal()






        
    });
    
});