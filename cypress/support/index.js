import './commands'
import '@shelex/cypress-allure-plugin';

require('cypress-xpath');

Cypress.Allure.reporter
    .getInterface()
    .defineSuiteLabels((titlePath, fileInfo) => {
        return [titlePath.pop()];
    });


