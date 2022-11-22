class SearchMessageTemplate{

    MessageTemplate = '//p[contains(text()," Message templates")]';
    keywords = "//input[@class='form-control text-box single-line']";
    search = "//button[@class='btn btn-primary btn-search']";
    BlogComment = "//td[contains(text(),'Blog.BlogComment')]";

    searchKeyword(){
        cy.xpath(this.MessageTemplate).click();
        cy.xpath(this.keywords).type("Blog.BlogComment");
        cy.xpath(this.search).click();
        cy.xpath(this.BlogComment).should('contain','Blog.BlogComment');
    }
    
}
export default SearchMessageTemplate