/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";



describe('Login and Create a Client', () => {
   const loginPage = new LoginPage
   const homePage = new HomePage
   const createClientForm = new CreateClientForm
    it('Login', () => {
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        cy.wait(4000) 
        cy.get('h2').should('have.text', 'Matias Diego test')
        cy.get("[class='flex grow items-center gap-2'] .text-xx-s").should('have.text', "matias.diego@rgbrenner.com")
        cy.get("[class='grow-1 flex'] [type]").should('be.visible').should('have.text', "Create new client")
   
    });
    
});