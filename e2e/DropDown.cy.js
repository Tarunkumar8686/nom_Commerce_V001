

describe('Handle dropdown',()=>{

// it('Dropdown with select',()=>{


//     cy.visit("https://testautomationpractice.blogspot.com/")

//     // cy.get("#country").select('Canada').should('be.selected')

//     cy.get("#country").select('Canada').should('have.value','canada')




// })
/*

it('Auto suggest dropdown',()=>{

    cy.visit("http://google.com")

    cy.get("[name='q']").type("Automation test practice")

    cy.get('.pcTkSc').contains('test automation practice form').click()

})*/

 it('Dyanmic dropdown', ()=>{

    cy.visit("http://google.com")

    cy.get("[name='q']").type("cypress automation")
//    cy.get("div.wM6W7d>span").each($el,index,$list),()=>{

// if($el.text()=='cypress automation tutorial'){

//     cy.wrap($el).click()
// }


//    } 



 })





})