/// <reference types="Cypress" />
class LoginPage{
    accessLoginUrl(){
        cy.visit("https://stg.taxrms.rgbrenner.com/auth")
    }
    enterEmail(){
        cy.get('#email').click({force: true}).type("matias.diego@rgbrenner.com")
    }
    enterPassword(){
        cy.get('#password').type("Password1234!")

    }
    clickLoginButton(){
        cy.get('.rounded-lg').click()
    }

    assertLoginData(){
        cy.get('h2').should('have.text', 'Matias Diego test')
        cy.get("[class='flex grow items-center gap-2'] .text-xx-s").should('have.text', "matias.diego@rgbrenner.com")
        cy.get("[class='grow-1 flex'] [type]").should('have.text', "Create new client")
    }
    
} 

export default LoginPage