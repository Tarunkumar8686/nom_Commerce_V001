describe('Ratiobutton',()=>{

    it('check able ',()=>{

 cy.visit("https://testautomationpractice.blogspot.com/")

//  cy.get("#male").check()

cy.get("#monday").check().should("be.checked")

cy.get("#monday").uncheck().should("not.be.checked")

// Selecting all check boxes

//cy.get("[type='checkbox']").check().should("be.checked")

//  selecting first check box

cy.get("[type='checkbox']").first().check().should("be.checked")

cy.get("[type='checkbox']").last().check().should("be.checked")


    })
})