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
        homePage.clickNewClient()
        let ssn = createClientForm.addSsn()
        cy.log(ssn)    
        createClientForm.clickNext()
        let firstName = createClientForm.enterFirstName()
        cy.log(firstName)
        let lastName = createClientForm.enterLastName()
        let dob = createClientForm.enterDob()
        let zipCode= createClientForm.enterZipCode()
        let address1 = createClientForm.enterAddress1()
        let address2 = createClientForm.enterAddress2()
        let phone = createClientForm.enterPhone()
        let taxPrepper = createClientForm.selectTaxPrepper()
        let refReceipt = createClientForm.enterRefReceipt()
        let email = createClientForm.enterEmail(lastName)
        let language = createClientForm.selectLanguage('english')
        createClientForm.clickCreate()
        createClientForm.clickConfirm()
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
            taxPrepper : taxPrepper
        }
        cy.log(userData)
        cy.writeFile('./cypress/fixtures/created-user-data.json', userData)




        
    });
    
});