// describe("Frames",()=>{


//     it("frames handle",()=>{

//         cy.visit("https://the-internet.herokuapp.com/iframe")

//         //  Approach 1

//        const iframe = cy.get("#mce_0_ifr")
//         .its('0.contentDocument.body')
//         .should('be.visible')
//         .then(cy.wrap);

//         iframe.clear().type("TARUN KUMAR}");
//     })

//     // it("Creating Custom commands",()=>{

//     // cy.visit("https://the-internet.herokuapp.com/iframe")

//     // cy.getiframe('#mce_0_ifr')

//     // .clear().type("TARUN KUMAR");



// })


//               --->Practice one <------

describe('Iframes',()=>{
it('Approach 1',()=>{
cy.visit("https://the-internet.herokuapp.com/iframe")

const iframe =cy.get('[id="mce_0_ifr"]')
   .its('0.contentDocument.body')
.should('be.visible')
.then(cy.wrap)

iframe.clear().type('hi tarun')

})

it.only('approach 2',()=>{

    cy.visit("https://the-internet.herokuapp.com/iframe")
    cy.getiframe('[id="mce_0_ifr"]').should(have.click());

    cy.clear().type("Tarun kumat");
})

})


