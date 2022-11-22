import ContentManagement_Topic from "../Pages/ContentManagement_Topic";

const topic = new ContentManagement_Topic();

describe('Test user is able to Search Topic', () => {
    before(function () {
        cy.fixture('Data').then(function (data) {
          this.data = data;
        })
      })

    it('Topic Test',function(){
        cy.viewport(1497,900)
        cy.LoginDashboard();
        topic.searchTopic(this.data.Search);
        cy.logout();
    })
    })
    