/// <reference types="Cypress" />
class HomePage{
    clickNewClient(){
        cy.get('#root > div > main > div > div > div.grow-1.flex').click()
    }
    addSsn(number){
        cy.get('#ssn').type(number)
    }
    clickNext(){
        cy.contains('Next').click()
    }

    selectFilterType(filter){
        let sequence = ''
        switch(filter){
            case 'all':
                sequence = '{downArrow}{enter}'
                break
            case 'email':
                sequence = '{downArrow}{downArrow}{enter}'
                break
            case 'lastName':
                sequence = '{downArrow}{downArrow}{downArrow}{enter}'
                break
            case 'mobilePhone':
                sequence = '{downArrow}{downArrow}{downArrow}{downArrow}{enter}'
                break
            case 'ssn':
                sequence = '{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{enter}'
                break 
            case 'ein':
                sequence = '{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{enter}'
                break                           
        }
        cy.get('.w-36 > .relative > .css-b62m3t-container > .text-s').click({force:true}).type(sequence)
    }

    enterSearchTerm(term){
        cy.get('#searchInput').type(term)
    }

    selectClient(){
        cy.get('tbody > :nth-child(1)').click()
    }

    selectAllClients(){
        cy.contains('All Clients').click()
    }

    goToAllClientsUrl(){
        cy.visit('https://stg.taxrms.rgbrenner.com/all-clients')
    }

    assertNewClientData(userData){
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
    }
} 

export default HomePage