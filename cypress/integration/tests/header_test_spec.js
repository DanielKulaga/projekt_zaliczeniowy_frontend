describe('Header', function() {
    beforeEach(() => {
        cy.visit('https://restaurant-ruczaj.azurewebsites.net')
    })

    it('Should be visible', function() {
        cy.get('.header').should('have.length', 1);
    });

    it('Should have appropriate title', function () {
        cy.get('.header .header-name').should('have.text', 'Ruczaj restaurant')
    })

    it('Should have shopping cart icon button', function () {
        cy.get('.shopping-cart').should('have.length', 1)
    })

    it('Should have log in button', function () {
        cy.get('.header li a').eq(1).should('have.text', 'Log in')
    })

    describe('Shopping card icon button', function() {
        it('open new page after click', function () {
            cy.get('.shopping-cart').click();

            cy.url().should('include', '/shopping-card')
        })
    })

    describe('LogIn button', function() {
        it('Open new page after click', function () {
            cy.get('.header li a').eq(1).click();

            cy.url().should('include', '/login')
        })
    })

    describe('Header after login', function() {
        beforeEach(() => {
            cy.get('.header li a').eq(1).click();
            cy.wait(500)
            cy.visit('https://restaurant-ruczaj.azurewebsites.net/login/success')
            window.localStorage.setItem('token', '123e')
            window.localStorage.setItem('email', 'test3@gmail.com')
        })

        it('Should have log out button', function () {
            cy.get('.header li a').eq(1).should('have.text', 'Log out')
        })
    })

    describe('Badge number', function() {
        it('Should be empty string when card is empty', function () {
            window.localStorage.setItem('card', null);
            cy.get('.BaseBadge-badge').should('have.text', '');
        })

        it('should reflect elements in card', function () {
            window.localStorage.setItem('card', null);
            cy.get('.item .info button').first().click();
            cy.get('.BaseBadge-badge').should('have.text', '1');
        })

        it('should reflect elements in card', function () {
            window.localStorage.setItem('card', null);
            cy.get('.item .info button ').first().click();
            cy.get('.item .info button').first().click();
            cy.get('.BaseBadge-badge').should('have.text', '2');
        })
    })
})