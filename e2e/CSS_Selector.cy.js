describe('CSSSelector',()=>{

    it("cssSelector",()=>{

    cy.visit("https://www.amazon.in/")
      
    cy.get("#twotabsearchtextbox").type("Tshirts")

    cy.get("[type='submit']").click;

    cy.get(".a-color-state a-text-bold").contains("Tshirts")

    })
})