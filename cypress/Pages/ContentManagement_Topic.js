class ContentManagement_Topic{

    topics = '//p[contains(text()," Topics (pages)")]';
    search ='//input[@class="form-control text-box single-line"]';
    searchButton = '//button[@class="btn btn-primary btn-search"]';

    searchTopic(search){
        cy.xpath(this.topics).click();
        cy.xpath(this.search).type(search);
        cy.xpath(this.searchButton).click();
    }
}

export default ContentManagement_Topic
