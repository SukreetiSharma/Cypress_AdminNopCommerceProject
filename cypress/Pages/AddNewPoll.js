class AddNewPolls{

    Polls ='//p[contains(text()," Polls")]';
    Add = '//a[@class="btn btn-primary"]';
    Name = '//input[@name="Name"]';
    Save = '//button[@name="save"]';
    Message = '//div[@class="alert alert-success alert-dismissable"]';

   newPolls(name){
    cy.xpath(this.Polls).click();
    cy.xpath(this.Add).click();
    cy.xpath(this.Name).type(name)
    cy.xpath(this.Save).click();
    cy.xpath(this.Message).should('contain','The new poll has been added successfully.');
   } 
}

export default AddNewPolls
