/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";
import ClientDetails from "./page objects/clientDetails";



describe('Filter User', () => {
   const loginPage = new LoginPage
   const homePage = new HomePage
   const createClientForm = new CreateClientForm
   before(function(){
    cy.fixture('/created-user-data.json').then(function(data){
        //this.data = data
        globalThis.data = data
    })
   })
    it('Filter by any value', () => {
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        cy.wait(4000) 
        homePage.goToAllClientsUrl()
        homePage.selectFilterType('email')
        homePage.enterSearchTerm(data.email)
        cy.wait(4000)
        homePage.selectClient()
        cy.get('.flex.flex-col.gap-2.items-start > .font-medium.text-lg').should('have.text', data.firstName +' '+data.lastName)
        cy.log(data.SSN)
        cy.get('.flex.flex-col.gap-2.items-start > div:nth-of-type(3)').should('have.text', 'SSN '+ data.SSN.toString().slice(0, 3) + '-' + data.SSN.toString().slice(3, 5) + '-' + data.SSN.toString().slice(5))
        cy.get('.flex.flex-col.gap-2.items-start > div:nth-of-type(4)').should('have.text', data.email)
        //cy.get('div:nth-of-type(1) > .text-blue-gray-sm').should('have.text','Garolfaa, Alaska, US')
        cy.get('div:nth-of-type(2) > .text-blue-gray-sm').should('have.text', data.address1)
        cy.get('div:nth-of-type(4) > .text-blue-gray-sm').should('have.text', data.zipCode)
        cy.get('div:nth-of-type(3) > .text-blue-gray-sm').should('have.text', data.address2)
        cy.get('div:nth-of-type(5) > .text-blue-gray-sm').should('have.text', data.dob)
        cy.get('div:nth-of-type(6) > .text-blue-gray-sm').should('have.text', data.phone)
        cy.get('div:nth-of-type(7) > .text-blue-gray-sm').should('have.text', data.taxPrepper)
        cy.get('div:nth-of-type(8) > .text-blue-gray-sm').should('have.text', data.language.charAt(0).toUpperCase() + data.language.slice(1))






        
    });
    
});