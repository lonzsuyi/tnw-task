describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Get Welcome title', () => {
    cy.findAllByText('Welcome the the Transport Info').should('be.visible');
  })

  it("Click Operator link to Operator page", () => {
    cy.contains('a', 'Check The Bus Operator').click();
    cy.url().should('include', '/bus_operator');
  })

});


describe('Operator list page', () => {
  beforeEach(() => {
    cy.visit('/bus_operator');
  });

  it('Get Bus Operators title', () => {
    cy.findAllByText('Transport Of NSW - Bus Operators').should('be.visible');
  });

  it('Check the bus operator card rendering', () => {
    cy.contains('a', 'Westbus').should('exist');
    cy.contains('a', 'Sydney Buses').should('exist');
    cy.contains('a', 'Other Buses').should('exist');
    cy.contains('a', 'Other Buses').trigger('mouseover');
    cy.contains('a', 'Other Buses').should('have.class', 'hover:border-b')
  });

  it('Check the bus operator card clickable', () => {
    cy.contains('a', 'Sydney Buses').click();
    cy.url().should('include', '/bus_operator/detail');
  });
});

describe('Operator detail page', () => {
  beforeEach(() => {
    cy.visit('/bus_operator/detail?name=Sydney%20Buses');
  });

  it('Whether the URL contains the correct query parameters and title', () => {
    cy.url().should('include', '?name=Sydney%20Buses');
    cy.findByText('Sydney Buses - 25/09/2021').should('be.visible');
  });

  it('Table Header Bold Check', () => {
    cy.get('table th').each(($th) => {
      cy.wrap($th).should('have.css', 'font-weight', '700');
    });
  });

  it('Table route variant Bold Check', () => {
    cy.get('table tr:first-child td:nth-child(2) strong').should('have.css', 'font-weight', '700');
  });

  it('Tag text match color', () => {
    cy.contains('Late').should('have.class', 'text-status-late');
    cy.contains('Unknown').should('have.class', 'text-status-unknown');
  })

  it('Click Back url check', () => {
    cy.contains('a', 'Back').click();
    cy.url().should('include', '/bus_operator');
  })

})

describe('Notes submit page jump check', () => {
  beforeEach(() => {
    cy.visit('/bus_operator/detail?name=Sydney%20Buses');
  });

  it('Subimt Notes a check', () => {
    cy.contains('a', 'Submit Notes').click();
    cy.url().should('include', '/bus_operator/notes');
  })

})

describe('Notes submit page', () => {
  beforeEach(() => {
    cy.visit('/bus_operator/notes?name=Sydney%20Buses');
  });

  it('Whether the URL contains the correct query parameters and title', () => {
    cy.url().should('include', '?name=Sydney%20Buses');
    cy.findByText('Notes Form').should('be.visible');
  });

  it('Form submit check', () => {
    cy.get('input[name="notes"]').type('Notes Test');
    cy.contains('button', 'Submit').click();
    cy.url().should('include', '/bus_operator/detail');
  })

})