/// <reference types="Cypress" />
require('cypress-plugin-tab')

class CreateClientForm{
    getElementByIdAndType(id, value){
        let idHash = (`#${id}`).toString()
        cy.log(idHash)
        cy.get(idHash).type(value)
    }
    enterFirstName(){
        cy.get('#firstName').type('Gonza')
        //this.getElementById(id, value).type('Gonza')
    }
    enterLastName(){
        cy.get('#lastName').type('Kpo')
    }
    enterDob(){
        cy.get('[name="dateOfBirth"]').clear().type("01/01/1900")
    }
    enterZipCode(){
        cy.get('#zipCode').click({force:true}).type(Math.floor(Math.random()*90000) + 10000)
    }
    enterAddress1(){
        cy.get('#address1').type("Street Name "+ Math.floor(Math.random()*90000) + 10000 )
    }
    enterAddress2(){
        cy.get('#address2').type("Street Name "+ Math.floor(Math.random()*90000) + 10000 )
    }
    enterPhone(){
        cy.get('#phoneNumber').type('12345678901')
    }
    selectTaxPrepper(){
        cy.contains('Choose a tax preparer').click({force:true}).type('{downArrow}{downArrow}{enter}') 
    }

    enterRefReceipt(){
        cy.get('#referrersReceiptNumber').type('1234')
    }
    enterEmail(){
        let number = Math.floor(Math.random()*(999-100+1)+100)
        cy.get('#email').type(`gonzalo.roland+${number}@rootstrap.com`)
    }

    selectLanguage(lang){
        let sequence = ''
        switch(lang){
            case 'english':
                sequence = '{downArrow}{enter}'
                break
            case 'spanish':
                sequence = '{downArrow}{downArrow}{enter}'
                }
        cy.contains('Select...').click({force:true}).type(sequence)
        
    }

    clickCreate(){
        cy.get('.gap-4 > .bg-primary-500').click({force:true})
    }

    clickConfirm(){
        cy.get('.gap-4 > .bg-primary-500').click()
    }

} 

export default CreateClientForm