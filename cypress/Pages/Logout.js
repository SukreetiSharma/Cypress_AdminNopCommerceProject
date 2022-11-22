class Logout {

    logout = '//a[@class="nav-link"][contains(text(),"Logout")]';
    
    LogoutPage() {
        cy.xpath(this.logout).click();
    }
}

export default Logout
