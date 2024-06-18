describe('Handle tabs',()=>{

    it('Approach',()=>{

        cy.visit("https://the-internet.herokuapp.com/windows")
cy.get(".example>a").invoke('removeAttr','target').click();

cy.url().should('include','https://the-internet.herokuapp.com/windows')


cy.go('back');

    })

    it.only('Approach 2',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('.example>a').then((ele)=>{

           let url= ele.prop('href');
              cy.visit(url);
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new');

        cy.go('back');
    })
})