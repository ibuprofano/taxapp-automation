/// <reference types="Cypress" />
import LoginPage from "./page objects/loginPage";
import HomePage from "./page objects/homePage";
import CreateClientForm from "./page objects/createClientForm";
import ClientDetails from "./page objects/clientDetails";



describe('Login and Create a Client', () => {
   const loginPage = new LoginPage
   const homePage = new HomePage
   const createClientForm = new CreateClientForm
   const clientDetails = new ClientDetails
    it('Login', () => {

        ///////////////////////////////////////// Log in and check user data
        loginPage.accessLoginUrl()
        loginPage.enterEmail()
        loginPage.enterPassword()
        loginPage.clickLoginButton()
        cy.wait(4000) 
        cy.get('h2').should('have.text', 'Matias Diego test')
        cy.get("[class='flex grow items-center gap-2'] .text-xx-s").should('have.text', "matias.diego@rgbrenner.com")
        cy.get("[class='grow-1 flex'] [type]").should('have.text', "Create new client")

        ///////////////////////////////////////// Create client and save data in fixture
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
            taxPrepper : 'Matias Diego test'
        }
        cy.log(userData)
        cy.writeFile('./cypress/fixtures/created-user-data.json', userData)
        cy.wait(4000) 

        ///////////////////////////////////////// Find created client and check the data
        homePage.goToAllClientsUrl()
        homePage.selectFilterType('email')
        homePage.enterSearchTerm(userData.email)
        cy.wait(4000)
        homePage.selectClient()
        cy.get('.flex.flex-col.gap-2.items-start > .font-medium.text-lg').should('have.text', userData.firstName +' '+ userData.lastName)
        cy.log(userData.SSN)
        cy.get('.flex.flex-col.gap-2.items-start > div:nth-of-type(3)').should('have.text', 'SSN '+ userData.SSN.toString().slice(0, 3) + '-' + userData.SSN.toString().slice(3, 5) + '-' + userData.SSN.toString().slice(5))
        cy.get('.flex.flex-col.gap-2.items-start > div:nth-of-type(4)').should('have.text', userData.email)
        //cy.get('div:nth-of-type(1) > .text-blue-gray-sm').should('have.text','Garolfaa, Alaska, US')
        cy.get('div:nth-of-type(2) > .text-blue-gray-sm').should('have.text', userData.address1)
        cy.get('div:nth-of-type(4) > .text-blue-gray-sm').should('have.text', userData.zipCode)
        cy.get('div:nth-of-type(3) > .text-blue-gray-sm').should('have.text', userData.address2)
        cy.get('div:nth-of-type(5) > .text-blue-gray-sm').should('have.text', userData.dob)
        cy.get('div:nth-of-type(6) > .text-blue-gray-sm').should('have.text', userData.phone)
        cy.get('div:nth-of-type(7) > .text-blue-gray-sm').should('have.text', userData.taxPrepper)
        cy.get('div:nth-of-type(8) > .text-blue-gray-sm').should('have.text', userData.language.charAt(0).toUpperCase() + userData.language.slice(1))

        ///////////////////////////////////////// Add and check comments 
        let commentValue1 = 'This is an automated comment test.' //This can be edited, will try to randomize in the 
        let commentValue2 = 'This is ANOTHER an automated comment test.'
        clientDetails.openCommentModal()
        //var commentValue = 'This is an automated comment test.' //This can be edited, will try to randomize in the future
        clientDetails.addNote(commentValue1)
        clientDetails.sendNote()
        //clientDetails.openComments()
        cy.wait(4000)
        clientDetails.openComments()
        cy.get('.border-l.border-l-4.border-l-primary-500.border-t.cursor-pointer.flex.flex-col.gap-2.justify-between.p-4.w-full > .h-8.max-w-prose.text-start.text-xs.truncate.whitespace-pre').should('have.text', commentValue1)
        cy.get("[class='whitespace-pre text-sm text-blueGray-700']").should('have.text', commentValue1)
        clientDetails.openCommentModal2()
        clientDetails.addNote(commentValue2)
        clientDetails.sendNote()
        cy.get('.border-l.border-l-4.border-l-primary-500.border-t.cursor-pointer.flex.flex-col.gap-2.justify-between.p-4.w-full > .h-8.max-w-prose.text-start.text-xs.truncate.whitespace-pre').should('have.text', commentValue2)
        cy.get("[class='whitespace-pre text-sm text-blueGray-700']").should('have.text', commentValue2)
        cy.get(':nth-child(3) > .h-8').should('have.text', commentValue1).click()
        cy.get("[class='whitespace-pre text-sm text-blueGray-700']").should('have.text', commentValue1)
        cy.get("[class='z-10 flex gap-4 border-t bg-white p-6'] [type='submit']:nth-of-type(1)").click()

        ///////////////////////////////////////// Send and check chat messages
        let message1 = 'Testing the chat'
        let message2 = 'This is another chat'
        clientDetails.submitMessage(message1)
        cy.wait(2000)
        cy.get('.flex > .text-s').should('have.text', message1 )
        clientDetails.submitMessage(message2)
        cy.wait(2000)
        cy.get('.flex > .text-s').eq(1).should('have.text', message2 )
        cy.get('.shrink-0 cursor-pointer self-end max-w-[100%]').eq(1).click()
         

    });
    
});