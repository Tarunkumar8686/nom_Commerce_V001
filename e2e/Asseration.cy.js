describe('AsserationDemo',()=>{

//     it('implicit asseration',()=>{

// cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

// // cy.url().should('include','orangehrmlive.com')

// // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// // .and('contain','orangehrm')
// // .and('not.contain','lovehrm')


// // cy.title().should('include','OrangeHRM')
// // .and('eq',"orangehrm")
// // .and('contain','hrm') 

// cy.get("input[placeholder='Username']").should('have.value','Admin')



// })

it('Explicit Asseration',()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   cy.get("input[name='username']").type("Admin")
   cy.get("input[name='password']").type("admin123")

   cy.get("button[type='submit']").click();


 let exp="preity user"

 


   cy.get("oxd-userdropdown-name").then( (x)=>{

   let act= x.text();

      // BDD style

     expect(act).to.equal(exp)
     expect(act).to.not.equal(exp)
      
     // TDD Style

    assert.equal(act,exp)
    assert.not.equal(act.exp)


   })

})
})