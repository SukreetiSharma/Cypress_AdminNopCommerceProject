class AddNewItem{
    
    item ='//p[contains(text()," News items")]'
    Add = '//a[@class="btn btn-primary"]';
    Title ='//input[@name="Title"]';
    ShortDescription ='//textarea[@name="Short"]';
    FullDescription ='(//button[@class="tox-tbtn tox-tbtn--enabled"])[2]';
    Type = '//input[@type="url"]';
    Save ='//button[@title="Save"]';
    Submit = '//button[@name="save"]';

   newItem(title,Description){
    cy.xpath(this.item).click();
    cy.xpath(this.Add).click();
    cy.xpath(this.Title).type(title)
    cy.xpath(this.ShortDescription).type(Description);
    cy.xpath(this.FullDescription).click();
    cy.xpath(this.Type).type(title);
    cy.xpath(this.Save).click();
    cy.xpath(this.Submit).click();
   } 
}

export default AddNewItem
