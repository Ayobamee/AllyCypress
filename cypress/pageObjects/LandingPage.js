class LandingPage {


    getUsername() {

        return cy.get('#email')
    }


    getPassword() {

        return cy.get('#password')
    }

    getLogin() {
        return cy.get('[data-test="signin-submit"]')
    }

    getError() {
        return cy.get('[data-testid=login-error-message]')

    }

    getTypeUsername() {
        const username = "test";
        return username
    }



}

export default LandingPage;