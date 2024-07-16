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
} 

export default HomePage