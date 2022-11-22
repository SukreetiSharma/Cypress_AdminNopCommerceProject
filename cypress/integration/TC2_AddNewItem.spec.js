import AddNewItem from "../Pages/AddNewItem";

const item = new AddNewItem();

describe('Test user is able to Search Topic', () => {

    it('Topic Test',function(){
        cy.viewport(1497,900)
        cy.LoginDashboard();
        item.newItem();
       // cy.logout();
    })
    
    })