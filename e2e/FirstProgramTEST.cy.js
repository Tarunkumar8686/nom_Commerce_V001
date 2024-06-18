describe('First Test',()=>{
it('verify positive test',()=>{

    cy.visit("https://www.Facebook.com")

    cy.title().should('eq','Facebook')
  
})

it('verify Negitvie test',()=>{

    cy.visit("https://www.Facebook.com")

    cy.title().should('eq','Facebook1234')
  
})

})



