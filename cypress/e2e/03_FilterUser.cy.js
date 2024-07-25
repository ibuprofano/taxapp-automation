/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
describe('Filter User', () => {
    before(function(){
        cy.fixture('/created-user-data.json').then(function(data){
            globalThis.data = data
        })
    })
   const loginPage = new LoginPage
   const homePage = new HomePage
   beforeEach(() => {
    loginPage.login()
    })

   
    it('Filter by all values', () => {
        homePage.goToAllClientsUrl()
        homePage.selectFilterType('all')
        homePage.enterSearchTerm(data.email)
        cy.wait(2000)
        homePage.assertSearchResults(data)
        cy.reload()
        homePage.enterSearchTerm(data.lastName)
        cy.wait(2000)
        homePage.assertSearchResults(data)
        cy.reload()
        homePage.enterSearchTerm(data.phone)
        cy.wait(2000)
        homePage.assertSearchResults(data)
        cy.reload()
        homePage.enterSearchTerm(data.SSN)
        cy.wait(2000)
        homePage.assertSearchResults(data)
        cy.reload()
        homePage.selectFilterType('email')
        homePage.enterSearchTerm(data.email)
        cy.wait(2000)
        homePage.assertSearchResults(data)
        cy.reload()
        homePage.selectFilterType('lastName')
        homePage.enterSearchTerm(data.lastName)
        cy.wait(2000)
        homePage.assertSearchResults(data)
        cy.reload()
        homePage.selectFilterType('mobilePhone')
        homePage.enterSearchTerm(data.phone)
        cy.wait(2000)
        homePage.assertSearchResults(data)
        cy.reload()
        homePage.selectFilterType('ssn')
        homePage.enterSearchTerm(data.SSN)
        cy.wait(2000)
        homePage.assertSearchResults(data)
        //homePage.selectFilterType('ein')
        //homePage.enterSearchTerm(data.email)
        //cy.wait(4000)
        
        






        
    });
    
});