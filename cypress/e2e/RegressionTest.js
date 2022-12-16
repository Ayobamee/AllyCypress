/// <reference types= "cypress" />

describe("Nova Test suite", () => {
  beforeEach(() => {

    //Login
    cy.Login({});
    // Inject the axe-core library
    cy.injectAxe();
    cy.checkA11y();
  });

  it("Validate that user with invalid details cannot login to the Nova successfully", () => {
    //Assert login with wrong details.
    cy.AssertLoginWrongDetails({});
    cy.checkA11y();
  });

});
