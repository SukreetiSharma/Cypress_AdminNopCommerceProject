import AddNewItem from "../Pages/AddNewItem";

const item = new AddNewItem();

describe('Test user is able to add new Topic', () => {
    before(function () {
        cy.fixture('Data').then(function (data) {
          this.data = data;
        })
      })

    it('Topic Test',function(){
        cy.viewport(1497,900)
        cy.LoginDashboard();
        item.newItem(this.data.Title,this.data.Description);
        cy.logout();
    })
    
    })