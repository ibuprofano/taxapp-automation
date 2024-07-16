/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";
import ClientDetails from "./page objects/clientDetails";



describe('Filter User', () => {
   const loginPage = new LoginPage
   const homePage = new HomePage
   const createClientForm = new CreateClientForm
    it('Filter by any value', () => {
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        cy.wait(4000) 
        homePage.goToAllClientsUrl()
        homePage.selectFilterType('email')
        homePage.enterSearchTerm('gonzalo.roland+rgb1@rootstrap.com')
        cy.wait(4000)
        homePage.selectClient()
        cy.get('.flex.flex-col.gap-2.items-start > .font-medium.text-lg').should('have.text', 'Gonzaloas Saraza')
        cy.get('.flex.flex-col.gap-2.items-start > div:nth-of-type(3)').should('have.text','SSN 547-38-6666')
        cy.get('.flex.flex-col.gap-2.items-start > div:nth-of-type(4)').should('have.text','gonzalo.roland+rgb1@rootstrap.com')
        //cy.get('').should('','')





        
    });
    
});