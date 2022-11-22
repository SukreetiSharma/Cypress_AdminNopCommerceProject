import SearchMessageTemplate from "../Pages/SearchMessageTemplate";

const messageTemplate = new SearchMessageTemplate();

describe('Test user is able to Search message Template', () => {

    it('message Template Test',function(){
        cy.viewport(1497,900)
        cy.LoginDashboard();
        messageTemplate.searchKeyword();
       // cy.logout();
    })
    
    })