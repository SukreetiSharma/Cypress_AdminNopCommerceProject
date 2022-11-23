import AddNewPolls from '../Pages/AddNewPoll'

const Polls = new AddNewPolls();

describe('Test user is able to add new Polls', () => {
    before(function () {
        cy.fixture('Data').then(function (data) {
          this.data = data;
        })
      })

    it('Polls Test',function(){
        cy.viewport(1497,900)
        cy.LoginDashboard();
        Polls.newPolls(this.data.Name);
        cy.logout();
    })
    
    })