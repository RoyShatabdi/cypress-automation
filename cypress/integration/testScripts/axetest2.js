import { AxeConfig } from "../support/axeConfig";

const configuration = {
    runOnly: {
        type: 'tag',
        values: ['wcag21aa', 'wcag21a', 'wcag2aa', 'wcag2a', 'best-practice'],
    }
};

describe("Axe violations", () => {
  beforeEach(() => {
    cy.visit("https://stellar-photon.ntn.jadu.net/");
    cy.injectAxe();
    cy.checkA11y(configuration);
  });

  it("home page should have no axe violations", () => {
    cy.configureAxe(AxeConfig);
    cy.checkA11yAndReportViolations();
  });
});