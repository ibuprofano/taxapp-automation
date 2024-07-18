/// <reference types="Cypress" />
require('cypress-plugin-tab')
const fs = require('fs')

class CreateClientForm{


 
    getElementByIdAndType(id, value){
        let idHash = (`#${id}`).toString()
        cy.log(idHash)
        cy.get(idHash).type(value)
    }

    addSsn(number){
        let ssnValue = Math.floor(100000000 + Math.random() * 900000000)
        cy.get('#ssn').type(ssnValue)
        //cy.log(ssnValue)
        return ssnValue
    }
    

    clickNext(){
        cy.contains('Next').click()
    }


    enterFirstName(){
        let firstNamevalue = 'Gonza'
        cy.get('#firstName').type(firstNamevalue)
        return firstNamevalue
    }
    enterLastName(){
        var lastNameValue = Math.random()*(999-100+1)+100
        cy.get('#lastName').type(lastNameValue)
        return lastNameValue
    }
    enterDob(){
        let dobValue = "01/01/1900"
        cy.get('[name="dateOfBirth"]').clear().type(dobValue)
        return dobValue
    }
    enterZipCode(){
        let zipCodeValue = Math.floor(Math.random()*90000) + 10000
        cy.get('#zipCode').click({force:true}).type(zipCodeValue)
        return zipCodeValue
    }
    enterAddress1(){
        let address1Value = "Street Name "+ Math.floor(Math.random()*90000) + 10000
        cy.get('#address1').type(address1Value)
        return address1Value
    }
    enterAddress2(){
        let address2Value = "Street Name "+ Math.floor(Math.random()*90000) + 10000
        cy.get('#address2').type(address2Value)
        return address2Value
    }
    enterPhone(){
        let phoneValue = Math.floor(Math.random() * 1000000000)
        cy.get('#phoneNumber').type(phoneValue)
        return phoneValue
    }
    selectTaxPrepper(){
        cy.contains('Choose a tax preparer').click({force:true}).type('{downArrow}{downArrow}{enter}')
        let taxPrepperValue = cy.get("[class] div:nth-of-type(12) [class='text-s border-blueGray-200 placeholder\:text-s h-10 rounded-lg border px-3 py-2 font-normal shadow-sm placeholder\:font-normal text-blueGray-700 \!cursor-pointer css-cp01gg-control']")
        cy.log(taxPrepperValue)
        //return taxPrepperValue
    }

    enterRefReceipt(){
        let refReceipValue = Math.floor(Math.random() * 1000)
        cy.get('#referrersReceiptNumber').type('refReceipValue')
        return refReceipValue
    }
    enterEmail(lastNameValue){
        let emailValue = 'gonzalo.roland+'+ lastNameValue +'@rootstrap.com'
        cy.get('#email').type(emailValue)
        return emailValue
    }

    selectLanguage(langValue){
        let sequence = ''
        switch(langValue){
            case 'english':
                sequence = '{downArrow}{enter}'
                break
            case 'spanish':
                sequence = '{downArrow}{downArrow}{enter}'
                }
        cy.contains('Choose a language').click({force:true}).type(sequence)
        return langValue
        
    }

    clickCreate(){
        cy.get('.gap-4 > .bg-primary-500').click({force:true})
    }

    clickConfirm(){
        cy.get('.gap-4 > .bg-primary-500').click()
    }

    saveUserData(ssnValue, firstNameValue, lastNameValue, dobValue, zipCodeValue, address1Value, address2Value, phoneValue, refReceiptValue, emailValue, langValue) {
        let userData = {
            firstName : firstNameValue,
            lastName : lastNameValue,
            dob : dobValue,
            zipCode : zipCodeValue,
            address1: address1Value,
            address2: address2Value,
            phone: phoneValue,
            refReceipt : refReceiptValue,
            email: emailValue,
            language : langValue,
            SSN: ssnValue

        }
        cy.log(userData)
        cy.writeFile('/fixtures/created-user-data.json', userData)
        //fs.writeFile('/fixtures/createdUsers', userDatajson )
        //cy.log(userDatajson)
    }

} 

export default CreateClientForm