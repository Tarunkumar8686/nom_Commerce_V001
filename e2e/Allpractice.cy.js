



describe('practice',()=>{

//     it.skip
//     ('visit',()=>{

//         cy.visit("www.facebook.com")
//         cy.title().should('eq','Facebook – log in or sign up')
//     })

//     it.skip('negitive ',()=>{

//         cy.visit("www.facebook.com")
//         cy.title().should('eq','facebook123');
//     })


//     it.skip('locators',()=>{

//         cy.visit('https://www.amazon.in/')
//         cy.get('[name=field-keywords]').type('T shirts')

//         cy.get('input[type=submit]').click();
//         cy.get('.a-color-state a-text-bold').should('contains','tshirts');
//     })

//     it.skip('Asseration',()=>{

//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     //    cy.get('.orangehrm-login-branding').should('be.visible');

//     //    cy.get('input[placeholder="Username"]').type('Admin')
//     //    .should('have.value','Admin')
       
//     cy.url().should('include','orangehrmlive.com')
//     .and('contain','orangehrm')
//     // .and('eq','orangehrm')


//     cy.get('.orangehrm-login-branding').should('be.visible')
//     .and('exist')

//   cy.xpath('//a').should('have.length',5);
       
        
        
//     })

//     it.skip('explicit Asseration',()=>{

//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
//         cy.get("input[name='username']").type("Admin")
//    cy.get("input[name='password']").type("admin123")

//    cy.get("button[type='submit']").click();

//    let expName='gOVriBvXHK Priya';

//    cy.get('.oxd-userdropdown-name').then((x)=>{

//     const act=x.text();

//     //BDD approach

//     // expect(act).to.equal(expName);

//     // expect(act).to.not.equal(expName)
// //TDD approach
//     assert.equal(act,expName);
//     assert.notEqual(act,expName)

//    })

//    it.only('RadioButtons',()=>{

//  cy.visit('https://testautomationpractice.blogspot.com/')

// //  cy.get('#male').check().should('be.checked')


//  cy.get('.form-check-input[type="checkbox"]').check().should('be.visible')
//  .and('be.checked');
//    })

it.skip('dropbown with Select Tag',()=>{

    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get('#country').should('be.visible')
    .select('uk').should('have.value','uk')
})

it.skip('Without SelectTag',()=>{


    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
    cy.get('#select2-billing_country-container').click();

    cy.get(".select2-search__field").type('iran').type('{enter}');

    // Catpcher the write value or not code

    cy.get("#select2-billing_country-container").click()
    .should('have.text','Iran')


  })

it.skip('Static Auto suggest dropdown',()=>{

    cy.visit("https://www.google.com/")

    cy.get("[aria-label='Search']").type("Telangana")


    cy.get("[aria-label='telangana news']").should('have.text','Telangana news').click();

  })


it.only('dyanmic Dropdown',()=>{

 cy.visit("https://www.google.com/")

 cy.get('[name="q"]').type("cypress Automation")

 cy.wait(3000);

 //cy.get("[class='mkHrUc']>div:nth-child(1)>div>ul").should('have.lenght',10)

 cy.get("[class='mkHrUc']>div:nth-child(1)>div>ul>li").each(($el,index,$list)=>{

   if($el.text()=='cypress automation tutorial'){

     cy.wrap($el).click();

   }
})

cy.get('[name="q"]').should('have.value','cypress automation tutorial')
  })

   it.skip('Alerts',()=>{

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("[onclick='jsAlert()']").click();

    cy.on('window alert',(Am)=>{

      expect(Am).to.contain('I am a JS Alert');

      
    })

    cy.get("#result").should('have.text','You successfully clicked an alert')

   })
      
   it('Alerts-canacel',()=>{

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("[onclick='jsConfirm()']").click();

    cy.on('window alert',(Am)=>{

      expect(Am).to.contain('I am a JS Confirm');

      
    })

    cy.get("#result").should('have.text','You clicked: Cancel')
   })
    
it.skip('prompt',()=>{

cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

cy.window().then((win)=>{

  cy.stub(win,'prompt').returns('welcome');


})


cy.get("[onclick='jsPrompt()']").click();



   })

   




    })


    
