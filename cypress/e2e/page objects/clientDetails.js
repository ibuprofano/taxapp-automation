/// <reference types="Cypress" />
class ClientDetails{
   clickEditButtons(){
    cy.contains('Edit information').click()
    cy.get('button').contains('Edit client information').click()
   }
   clickDocsTab(){
    cy.contains('Documentation').click()
   }

   openFileModal(){
    cy.contains('Upload new document').click()
   }

   selectFile(){
    cy.get('input[type=file]').selectFile('cypress/e2e/page objects/shile.png', {force:true})
    
   }
   
   addNote(comment){
    cy.get('#comment').type(comment)
   }

   sendNote(){
      cy.get("[class='mt-4 flex gap-4'] [type='submit']:nth-of-type(2)").click()
   }
   
   uploadFile(){
    cy.contains("Accept").click()
   }

   openFile(filename){
    cy.contains(filename).invoke('removeAttr', 'target').click()
   }

   editFile(){
    cy.get('svg[role=button]').eq(0).click()
    cy.get('#fileName').type('New Name')
    cy.contains('Save').click()
   }

   openFileMenu(){
    cy.get(':nth-child(1) > .border-r > .gap-4 > .relative > .flex').click()
   }

   openNotes(){
    cy.contains('Notes').click()
   }

   openAddNoteModal(){
    cy.contains('Add note').click()
   }

   closeModal(){
    cy.contains('Close').click()
   }

   openCommentModal(){
    cy.contains('Add a comment').click()
   }

   openCommentModal2(){
      cy.contains('Add Comment').click()
     }

   openComments(){
    cy.get("[class='flex w-1\/3 flex-col items-start gap-4'] [class] [type='submit']:nth-of-type(2)").click()
   }

   submitMessage(message){
    cy.get('#messageInput').type(message +'{enter}')
    
   }
  
   openYearDropdown(){
      cy.contains('Tax year').next().click()
   }
   selectYear(year){
      cy.get('button:nth-of-type(2) > .text-left.text-x-s').click()
   }
   clickReceiptsTab(){
      cy.contains('Receipts').click()
   } 
   clickCreateReceipt(){
      cy.contains('Create Receipt').click()
   }
}
export default ClientDetails

//Test by comments