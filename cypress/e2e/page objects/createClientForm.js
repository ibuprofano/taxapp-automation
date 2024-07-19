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
        return ssnValue
    }
    

    clickNext(){
        cy.get("[type='button']").click()
    }


    enterFirstName(){
        let firstNamevalue = 'Gonza'
        cy.get('#firstName').clear().type(firstNamevalue)
        return firstNamevalue
    }
    enterLastName(){
        var lastNameValue = Math.random()*(999-100+1)+100
        cy.get('#lastName').clear().type(lastNameValue)
        return lastNameValue
    }
    enterDob(){
        let dobValue = "01/01/1900"
        cy.get('[name="dateOfBirth"]').clear().type(dobValue)
        return dobValue
    }
    enterZipCode(){
        let zipCodeValue = Math.floor(Math.random()*90000) + 10000
        cy.get('#zipCode').click({force:true}).clear().type(zipCodeValue)
        return zipCodeValue
    }
    enterAddress1(){
        let address1Value = "Street Name "+ Math.floor(Math.random()*90000) + 10000
        cy.get('#address1').clear().type(address1Value)
        return address1Value
    }
    enterAddress2(){
        let address2Value = "Street Name "+ Math.floor(Math.random()*90000) + 10000
        cy.get('#address2').clear().type(address2Value)
        return address2Value
    }
    enterPhone(){
        let phoneValue = Math.floor(Math.random() * 1000000000)
        cy.get('#phoneNumber').clear().type(phoneValue)
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
        cy.get('#referrersReceiptNumber').clear().type('refReceipValue')
        return refReceipValue
    }
    enterEmail(lastNameValue){
        let emailValue = 'gonzalo.roland+'+ lastNameValue +'@rootstrap.com'
        cy.get('#email').clear().type(emailValue)
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

        cy.get(':nth-child(15) > .relative > .css-b62m3t-container > .text-s').scrollIntoView({force:true}).click({force:true}).type(sequence)
        return langValue
        
    }

    clickCreate(){
        cy.get('.gap-4 > .bg-primary-500').click({force:true})
    }

    clickConfirm(){
        cy.get('.gap-4 > .bg-primary-500').click()
    }

    enterClientData(mode, previousUserData){

    let ssn = ''
    let taxPrepper = ''
        switch(mode){
            case 'create':
                ssn = this.addSsn()
                this.clickNext()
                taxPrepper =  this.selectTaxPrepper()
                break

            case 'edit':
                ssn = previousUserData.SSN
                taxPrepper = previousUserData.taxPrepper
                break
        }
        
        
        let firstName = this.enterFirstName()
        let lastName = this.enterLastName()
        let dob = this.enterDob()
        let zipCode= this.enterZipCode()
        let address1 = this.enterAddress1()
        let address2 = this.enterAddress2()
        let phone = this.enterPhone()
        let refReceipt = this.enterRefReceipt()
        let email = this.enterEmail(lastName)
        let language = this.selectLanguage('english', 'Choose a language')
        this.clickCreate()
        this.clickConfirm()

        let userData = {
            firstName : firstName,
            lastName : lastName,
            dob : dob,
            zipCode : zipCode,
            address1: address1,
            address2: address2,
            phone: phone,
            refReceipt : refReceipt,
            email: email,
            language : language,
            SSN: ssn,
            taxPrepper : 'Matias Diego test'
        }
        return userData
    }

    

} 

export default CreateClientForm