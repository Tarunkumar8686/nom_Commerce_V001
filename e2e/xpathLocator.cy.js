

describe('xpathlocator',()=>{

    it('No of links',()=>{
      
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.get("[name=username]").type("Admin")

       cy.get(input[name="password"]).type("admin123")
       should('have.value','admin123')
   


    })
})