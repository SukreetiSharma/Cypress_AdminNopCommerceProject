import SearchMessageTemplate from "../Pages/SearchMessageTemplate";

const messageTemplate = new SearchMessageTemplate();

describe('Test user is able to Search message Template', () => {
    before(function () {
        cy.fixture('Data').then(function (data) {
          this.data = data;
        })
      })

    it('message Template Test',function(){
        cy.viewport(1497,900)
        cy.LoginDashboard();
        messageTemplate.searchKeyword(this.data.keyword);
        cy.logout();
    })
    
    })