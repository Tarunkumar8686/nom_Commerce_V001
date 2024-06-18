describe('Test Suite',()=>{

    it('Navigate',()=>{

      cy.visit("https://demo.opencart.com/")
     cy.wait(2000);
      cy.get("[class='nav navbar-nav']>li:nth-child(7)").click();

      cy.get("[class='nav navbar-nav']>li:nth-child(7)").should('have.text','Cameras')

      cy.go('back');
      cy.go('forward');

      cy.reload();
      

    })

})