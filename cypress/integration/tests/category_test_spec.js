describe('Category', function() {
    beforeEach(() => {
        cy.visit('https://restaurant-ruczaj.azurewebsites.net')
    })

    it('Should be visible', function() {
        cy.get('.category').should('have.length', 1);
    });

    it('Should have title "Categories"', function() {
        cy.get('.category h4').should('have.text', "Categories");
    });

    it('Should show 5 categories', function() {
        cy.get('.category li').should('have.length', 5);
    });

    it('1st category should be "All"', function() {
        cy.get('.category button').eq(0).should('have.text', "All");
    });

    it('2nd category should be "Soups', function() {
         cy.get('.category button').eq(1).should('have.text', "Soups");
    });

    it('3rd category should be "Main dishes"', function() {
        cy.get('.category button').eq(2).should('have.text', "Main dishes");
    });

    it('4th category should be "Desserts"', function() {
         cy.get('.category button').eq(3).should('have.text', "Desserts");
    });

    it('5th category should be "Drinks"', function() {
         cy.get('.category button').eq(4).should('have.text', "Drinks");
    });


    it('Clicked All category shows 5 products', function() {
        cy.get('.category button').eq(0).click();

        cy.get('.menu-list .item').should('have.length', 5);
    });

    it('Clicked Drinks category shows 2 products', function() {
        cy.get('.category button').eq(4).click();

        cy.get('.menu-list .item').should('have.length', 2);
    });

    it('Clicked Soups category shows 1 product', function() {
        cy.get('.category button').eq(1).click();

        cy.get('.menu-list .item').should('have.length', 1);
    });

    it('button text is white', function() {
        cy.get('.category button ').eq(0).should('have.css', 'color', 'rgb(255, 255, 255)');
    });

    it('Name of dish is black font', function() {
        cy.get('.menu-list .item h4').should('have.css', 'color', 'rgb(0, 0, 0)');
    });
})