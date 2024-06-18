import login from "../PageObjects.js/PageObject-2"

describe('POM Test',()=>{

    it('POM Login Functionality',()=>{
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

       const ln = new login();

       ln.setUserName("Admin");
       ln.setPassword("admin123");
       ln.clickLogin();

       ln.verifyLogin();
        




































    })
})