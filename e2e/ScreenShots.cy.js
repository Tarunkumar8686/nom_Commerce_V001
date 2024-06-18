describe("ScreenShot",()=>{

    it('Capture Screenshot',()=>{

        cy.visit("https://demo.opencart.com/");
        // cy.screenshot("Loginpage");

        // cy.get("img[title='Your Store']").screenshot("logo");

cy.wait(3000);
        
        // Automatically capture the screenshot --
       cy.get('li:nth-child(7) a:nth-child(1)').click();

       cy.get("div[id='content'] h2").should('have.text','Tables')


    })
})