describe('Enter the Emag website', () =>{

it('Checking the shopping cart button', () =>{

cy.visit('https://emag.ro');

cy.get('.js-accept').click();
cy.get('#my_cart').click();
cy.get('#searchboxTrigger').type('headphones');
cy.get('.searchbox-submit-button > .em').click();
cy.get('[data-name="Casti Co2 pentru Apple iPhone, Model tip Lightning, In-Ear, Alb"] > .card-v2 > .card-v2-wrapper > .card-v2-content > .card-v2-atc > form > .btn').click();

})


})
