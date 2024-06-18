

describe('Handle Table',()=>{

    beforeEach('Login',()=>{

        cy.visit('https://demo-opencart.com/admin/index.php?route=common/login')
        
        cy.get('#input-username').type('demo');

        cy.get('#input-password').type('demo')

        .get("[type='submit']").click();

        cy.get('.btn-close').click();

        // cy.wait(3000);

        // cy.get('#menu>li:nth-child(6)>a').click()

        // cy.wait(3000);

        // cy.get('#menu-customer>ul>li:first-child').click();

    })

    it.skip('checking no of rows',()=>{

         cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')

         cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','6');
    })

    it('checking specific row & specific columne',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(4)>td:nth-child(3)").contains('boris.ivanov@alfa-cash.ru')
    })

    it.skip('read all rows and columns in the first page',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row,index,$rows)=>{

            cy.wrap($row).within(()=>{

                cy.get('td').each(($col,index,$cols)=>{
                   
                    cy.log($cols.text());
                })
            })
        })


    })

    it.skip("pagination",()=>{


        cy.get('col-sm-6 text-end').then((e)=>{      // finding no of pages

           mytext= e.text();                        // showing how my pages
             
          let all = mytext.subString(mytext.indexof("(")+1,mytext.indexof("Pages")-1)
            
          cy.log("Total no of pages"+all)

        })
    })
    

    it.skip('total pages',()=>{

        let totalpages;

        for(p=1;p<=totalpages;p++)
            {
            if(totalpages>p){

                cy.log("Active pages =="+p)
            }
            cy.get("[class='pagination'] li:nth-child("+p+")").click();
        }
    })

    it('read the all pages data',()=>{
         

        let totalpag =3;
        
        for(p=1;p<=totalpag;p++){
            if(totalpag>1){

                cy.log("active pages=="+p)
                cy.get("[class='pagination']>li:nth-child("+p+")").click();
                    cy.wait(3000);

                cy.get('table[class="table table-bordered table-hover"]>tbody>tr')

                .each(($row,index,$rows)=>{
                    
                    cy.wrap($row).within(()=>{

                        cy.get('td:nth-child(3)').then((e)=>{

                         cy.log(e.text());
                        })
                    })
                })

            }
        }

    })

})