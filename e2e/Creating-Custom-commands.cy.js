describe('Custom commands',()=>{

    it.only('using custom command with clicklink',()=>{

        cy.visit("https://demo.nopcommerce.com/");
        
          cy.clickLink('Apple MacBook Pro 13-inch');

          cy.get("div[class='product-name']").should('have.text',"Apple MacBook Pro 13-inch");
    })

// Creating login custom command

it.skip('login command',()=>{


    cy.visit('https://demo.nopcommerce.com/')

    cy.clickLink('Log in');

    cy.wait(5000);

    cy.loginapp('test1234@gmail.com','test1234')

    cy.get("[class='ico-account']").should('have.text','My account')
}

)

})
