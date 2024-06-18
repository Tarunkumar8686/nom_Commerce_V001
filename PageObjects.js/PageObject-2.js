class login{

       txtUsername ='[name="username"]';
       txtPassword ='[name="password"]';
       BtnSubmit='[type="submit"]'
       vfylogin="div[class='oxd-topbar-header-title']>span>h6";

    setUserName(userName){

        cy.get(this.txtUsername).type(userName);

    }
    setPassword(password){

        cy.get(this.txtPassword).type(password);
    }

    clickLogin(){

        cy.get(this.BtnSubmit).click();
    }

    verifyLogin(){

        cy.get(this.vfylogin).should('have.text','Dashboard')
    }
}

export default login;