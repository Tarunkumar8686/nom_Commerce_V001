require ('@4tw/cypress-drag-drop')

describe('Mouse Operation',()=>{

    it.skip('MouseHover',()=>{

        cy.visit('https://demo.opencart.com/');
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

        cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
        
        .should('be.visible').click();

       
    })
    
    it.skip('Right Click',()=>
        {
             
            // Approach 1
            cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

            // cy.get('.context-menu-one.btn.btn-neutral').rightclick();

            // cy.get("ul[class='context-menu-list context-menu-root']>li:nth-child(2)").should('be.visible')

           //approach 2

           cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
           cy.get("ul[class='context-menu-list context-menu-root']>li:nth-child(2)").should('be.visible')

    })
   it.skip('Double click',()=>
    {
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get("button[ondblclick='myFunction1()']").trigger('dblclick');

        cy.get('#field1').should('have.value','Hello World!')
   })

   it.skip('drag and drop',()=>{

    cy.visit('https://testautomationpractice.blogspot.com/')

    cy.get("[class='ui-widget-content ui-draggable ui-draggable-handle']>p").drag("[class='ui-widget-header ui-droppable']>p",{force:true})

   })

   it.only('Scrolling page',()=>{

    cy.visit('https://history.state.gov/countries/all')

    cy.get(":nth-child(1) > :nth-child(9) > ul > :nth-child(2) > a").scrollIntoView();

    cy.get(':nth-child(1) > :nth-child(9) > ul > :nth-child(2) > a').should('be.visible');

    cy.get('address[class="col-xs-12 col-sm-12 col-md-12"]').scrollIntoView({duration:2000});

    cy.get("address[class='col-xs-12 col-sm-12 col-md-12']").should('be.visible');




   })
     




})