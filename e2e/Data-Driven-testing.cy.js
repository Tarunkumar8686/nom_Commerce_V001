describe('Data driven testing',()=>{

    let userdata;
    it('Data Driven Test',()=>{

        cy.fixture('orangehrm2').then((data)=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            data.forEach((userdata)=>{

                cy.get("[name='username']").type(userdata.username);

                cy.get("[name='password']").type(userdata.password);
                cy.get("[type='submit']").click();
                if(userdata.username=='Admin' && userdata.password=='admin123')
                    {

                    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text")
                    .should('have.text',userdata.expected)
                    cy.wait(4000);
                    cy.get("[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
                    cy.wait(4000);
                    cy.get('[href="/web/index.php/auth/logout"]').click();

                    cy.wait(4000);
                }else{
                    cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('have.text',userdata.expected)
                }
            })
        })
    })

})