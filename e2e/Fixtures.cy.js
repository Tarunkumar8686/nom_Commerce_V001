describe('TestSuite',()=>{

//     it('FixtureDemo',()=>{

// cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

// cy.fixture('orangeHRM').then((data)=>{

// cy.get("[name='username']").type(data.username);

// cy.get("[name='password']").type(data.password);
// cy.get("[type='submit']").click();

// cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should('have.text',data.expected)




// })
//     })

   // Acess through hook - for multiple it blocks

   let userdata;
   before(()=>{
   

    cy.fixture('orangeHRM').then((data)=>{

        userdata =data;

    })
   })
    it('fixture',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
        cy.get("[name='username']").type(userdata.username);

        cy.get("[name='password']").type(userdata.password);
        cy.get("[type='submit']").click();
        
        cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should('have.text',userdata.expected)
    })

    
})
