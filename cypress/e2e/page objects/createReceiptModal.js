/// <reference types="Cypress" />
class CreateReceipt{
    openReceiptTypeModal(){
     cy.get("[class='mb-1'] [class='css-8mmkcg']").click()
    }

    selectReceiptType(receipt){
        let sequence = ''
        switch(receipt){
            case 'taxReceipt':
                sequence = '{enter}'
            case 'holdInfo':
                sequence = '{downArrow}{enter}'
                break
            case 'copyReceipt':
                sequence = '{downArrow}{downArrow}{enter}'
                break
            case 'mailingReceipt':
                sequence = '{downArrow}{downArrow}{downArrow}{enter}'
                break
            case 'extension':
                sequence = '{downArrow}{downArrow}{downArrow}{downArrow}{enter}'
                break
            case 'amended':
                sequence = '{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{enter}'
                break 
            case 'itin':
                sequence = '{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{enter}'
                break                           
        }
        cy.get("[class='mb-1'] [class='css-8mmkcg']").click({force:true}).type(sequence)
    }
    clickNext(){
        cy.get("[class='mt-4 flex gap-4'] [type='submit']:nth-of-type(2)").click()
    }
    
 }
 export default CreateReceipt