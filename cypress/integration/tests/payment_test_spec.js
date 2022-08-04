describe('Payment', function() {
    beforeEach(() => {
        cy.visit('https://restaurant-ruczaj.azurewebsites.net');
        window.localStorage.setItem('token', '123abc')
        window.localStorage.setItem('email', 'test3@gmail.com')
        cy.get('.item .info button').first().click();
        cy.get('.item .info button').first().click();
        cy.get('.shopping-cart').click();
        cy.get('.shopping-card a').click();

        cy.get('.shipping-form input').eq(0).type('Ruczaj Street')
        cy.get('.shipping-form input').eq(1).type('40')
        cy.get('.shipping-form input').eq(2).type('Krakow')
        cy.get('.shipping-form input').eq(3).type('30-408')

        cy.get('.shipping-form button').click();
        cy.wait(1000)
    });

    it('Payment', function() {
        cy.get('.payment button').should('have.text', 'Pay now');
    });

})