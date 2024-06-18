

describe('Alerts',()=>{

// it('Js alert',()=>{

// it will have some text and an 'ok' button

// cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

// cy.get('[onclick="jsAlert()"]').click()

// cy.on('window:alert',(t)=>{

// expect(t).to.contains('I am a JS Alert')




// })

// cy.get("#result").should('have.text','You successfully clicked an alert')


// it('confirm alert',()=>{


//     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

//     cy.get('[onclick="jsConfirm()"]').click()
    
//     cy.on('window:alert',(t)=>{

//         expect(t).to.contains('Click for JS Confirm')

//     })

//     cy.get("#result").should('have.text','You clicked: Ok')
// })

// it("alert -cancel",()=>{

//     cy.get("[onclick='jsConfirm()']").click()

//     cy.on('window:alert',(t)=>{

//                 expect(t).to.contains('Click for JS Confirm')

//     cy.on("window:alert",()=> false); // for canceling the button


//     cy.get("#result").should('have.text','You clicked: Cancel')
   
//     })
// })


// it.only("prompt alert",()=>{

// cy.visit("https://the-internet.herokuapp.com/javascript_alerts")


// cy.window().then((win)=>{

//     cy.stub(win,'prompt'),returns('welcome');
//     cy.get("button[onclick='jsPrompt()']").click();

// })

// })




// This is one approach

it.only("authntication alert",()=>{

    cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth: 
                                                              {
                                                                username:"admin",
                                                                password:"admin"
                                                            }
                                                        })
cy.get("div[class='example'] p").should('have.contain','Congratulations! You must have the proper credentials.')

})

})
