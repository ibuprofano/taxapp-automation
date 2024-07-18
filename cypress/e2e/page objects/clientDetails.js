/// <reference types="Cypress" />

class ClientDetails{
   openEditModal(){
    cy.contains('Edit information').click()
   }

   assertModalInfo(userData){
      cy.get("[name='email']").invoke('attr', 'value').should('contain', userData.email)
      cy.get("[name='firstName']").invoke('attr', 'value').should('contain', userData.firstName)
      cy.get("[name='lastName']").invoke('attr', 'value').should('contain', userData.lastName)
      cy.get("input[name='dateOfBirth']").invoke('attr', 'value').should('contain', userData.dob)
      cy.get("[name='zipCode']").invoke('attr', 'value').should('contain', userData.zipCode)
      cy.get("[name='address1']").invoke('attr', 'value').should('contain', userData.address1)
      cy.get("[name='address2']").invoke('attr', 'value').should('contain', userData.address2)
      cy.get("[name='phoneNumber']").invoke('attr', 'value').should('contain', userData.phone)
      //cy.get("[name='referrersReceiptNumber']").invoke('attr', 'value').should('contain', userData.refReceipt)
      cy.get("[class] div:nth-of-type(15) .css-w54w9q-singleValue").should('have.text', userData.language.charAt(0).toUpperCase() + userData.language.slice(1))
      cy.get("[class] div:nth-of-type(12) .css-w54w9q-singleValue").should('have.text', userData.taxPrepper)
   }


   clickEditButton(){
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

   assertSecondComment(comment){
      cy.get(':nth-child(3) > .h-8').should('have.text', comment).click()
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

   assertChatMessages(position, message){
      cy.get('.flex > .text-s').eq(position).should('have.text', message )
   }

   assertFileName(path, chars){
      cy.get("[name='oldName']").invoke('attr', 'value').should('contain', path.slice(chars))
   }

   assertFileName(path){
      var nodePath = require('path')
      cy.get("[name='oldName']").invoke('attr', 'value').should('contain', nodePath.basename(path))
   }

   assertFileMenu(){
      cy.get('.gap-4 > .relative > .absolute').should('be.visible')
   }
}
export default ClientDetails

//Test by comments