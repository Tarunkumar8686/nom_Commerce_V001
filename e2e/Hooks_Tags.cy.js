  /*
   
  before
  after
  beforeEach
  afterEach



  */
describe('TestSuite',()=>{

   before(()=>{

    cy.log('launch my application')
   })

   after(()=>{

    cy.log('close my application')
   })

   beforeEach(()=>{
   
    cy.log("logined")
   })

   afterEach(()=>{

   cy.log('logouted')
   })

    it('test1',()=>{

       cy.log('Test1 login')
    })

    it('test2',()=>{

        cy.log("test2 login")
    })

    it('test3',()=>{

        cy.log("test3 login")
        
    })


})