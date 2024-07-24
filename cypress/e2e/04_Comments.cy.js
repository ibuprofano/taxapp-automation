/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import ClientDetails from "./page objects/clientDetails";
describe('Comments', () => {
    before(() => {
        cy.fixture('created-user-data.json').then((data) => {
            globalThis.data = data;
        })
    })
   
   const loginPage = new LoginPage
   const homePage = new HomePage
   const clientDetails = new ClientDetails
   let commentValue1 = 'This is an automated comment test.' 
   let commentValue2 = 'This is ANOTHER automated comment test.'
   beforeEach(() => {
        loginPage.login()
        homePage.accessClientDetails(data)
        cy.wait(4000)
   })
    it('Add and Check Comments', () => {
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
    }); 
    it('Check comments Again', () => {
        clientDetails.openComments()
        clientDetails.assertComment(commentValue2)
        //clientDetails.assertComment(commentValue1) --> need to figure out selector 
    })
});