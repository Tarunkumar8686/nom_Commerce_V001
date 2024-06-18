class login{

    setUserName(userName){

        cy.get('[name="username"]').type(userName);

    }
    setPassword(password){

        cy.get('[name="password"]').type(password);
    }

    clickLogin(){

        cy.get('[type="submit"]').click();
    }

    verifyLogin(){

        cy.get("div[class='oxd-topbar-header-title']>span>h6").should('have.text','Dashboard')
    }
}

export default login;