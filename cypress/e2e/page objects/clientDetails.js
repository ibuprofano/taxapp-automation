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

   selectFile(path){
    cy.get('input[type=file]').selectFile(path, {force:true})
    
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

   openFileDetail(){
    cy.get('svg[role=button]').eq(0).click()
    
   }

   editFile(newname){
    cy.get('#fileName').type(newname)
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
   
   deleteMessage(){
      cy.get('').click()
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

   assertComment(comment){
      cy.get('.border-l.border-l-4.border-l-primary-500.border-t.cursor-pointer.flex.flex-col.gap-2.justify-between.p-4.w-full > .h-8.max-w-prose.text-start.text-xs.truncate.whitespace-pre').should('have.text', comment)
      cy.get("[class='whitespace-pre text-sm text-blueGray-700']").should('have.text', comment)
   }

   openSecondComment(){
      cy.get(':nth-child(3) > .h-8').as('secondComment').click()
   }

   assertCommentSwitch(){
      secondComment.should('have.text', commentValue1) //--> TBD 
   }

   closeFileModal(){
      cy.get("[class='mt-10 flex gap-4'] [type='submit']:nth-of-type(1)").click()
   }
}
export default ClientDetails

//Test by comments