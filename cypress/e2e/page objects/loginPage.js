/// <reference types="Cypress" />
class LoginPage{
    accessLoginUrl(){
        cy.visit("/")
    }
    enterEmail(){
        cy.get('#email').click({force: true}).type(Cypress.env('userName'))
    }
    enterPassword(){
        cy.get('#password').type("Password1234!")

    }
    clickLoginButton(){
        cy.get('.rounded-lg').click()
    }

    login(){
        
        this.accessLoginUrl()
        this.enterEmail()
        this.enterPassword()
        this.clickLoginButton()
        cy.wait(4000)
    }

    assertLoginData(){
        cy.get('h2').should('have.text', Cypress.env('userFullName'))
        cy.get("[class='flex grow items-center gap-2'] .text-xx-s").should('have.text', Cypress.env('userName'))
        cy.get("[class='grow-1 flex'] [type]").should('have.text', "Create new client")
    }
    
} 

export default LoginPage