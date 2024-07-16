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
    
} 

export default LoginPage