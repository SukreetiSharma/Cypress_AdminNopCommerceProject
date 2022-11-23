class AddNewForum{

    Forums ='//p[contains(text()," Forums")]';
    Add = '(//a[@class="btn btn-primary"])[2]';
    Name = '//input[@class="form-control text-box single-line"]';
    Save = '//button[@name="save"]';
    Message ='//div[@class="alert alert-success alert-dismissable"]';

   newForum(name,forumMessage){
    cy.xpath(this.Forums).click();
    cy.xpath(this.Add).click();
    cy.xpath(this.Name).type(name);
    cy.xpath(this.Save).click();
    cy.xpath(this.Message).should('contain',forumMessage);
   } 
}

export default AddNewForum
