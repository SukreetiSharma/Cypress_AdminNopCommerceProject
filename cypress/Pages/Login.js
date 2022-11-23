class Login {

    email ='//input[@class="email"]';
    Password = '//input[@class="password"]';
    login ='//button[@class="button-1 login-button"]';
    ContentManagement ='//i[@class="nav-icon fas fa-cubes"]';

        navigate() {
        cy.visit('https://admin-demo.nopcommerce.com/Admin');
        cy.xpath(this.email).click();
        cy.xpath(this.Password).click();
        cy.xpath(this.login).click();
        cy.xpath(this.ContentManagement).click();
    }
    
}

export default Login