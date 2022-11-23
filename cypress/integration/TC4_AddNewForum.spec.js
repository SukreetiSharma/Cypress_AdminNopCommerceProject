import AddNewForum from "../Pages/AddNewForum";

const Forum = new AddNewForum();

describe('Test user is able to add new Forum', () => {
    before(function () {
        cy.fixture('Data').then(function (data) {
          this.data = data;
        })
      })

    it('Forum Test',function(){
        cy.viewport(1497,900)
        cy.LoginDashboard();
        Forum.newForum(this.data.Name,this.data.ForumMessage);
        cy.logout();
    })
    
    })