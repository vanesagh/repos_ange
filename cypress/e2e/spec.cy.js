
describe('Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Bienvenidos')
    cy.contains('Repostería Ángeles')
    cy.contains('Precios')

  });

});

describe('Go to precios page', () => {
  it('successfully goes to lista de precios page from home page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Precios').click()
    cy.contains('Lista de precios')
    cy.contains('Producto')
    cy.get(':nth-child(3) > strong').contains('Precio')

    cy.contains('Unidad/Tamaño')


  })
})

describe('PriceProductTable', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/listaprecios')
  })
  it('should render the table with rows', () => {
    // Assert that the table is rendered
    cy.get('table[aria-label="table"]').should('exist');

    // Assert that there are rows in the table
    cy.get('table[aria-label="table"] tbody tr').should('have.length.gt', 0);
  });

  it('should expand and collapse rows', () => {
    // Assuming you have at least one row to test
    cy.get('h4').should('not.exist')


    cy.get('table.MuiTable-root tbody.MuiTableBody-root tr.MuiTableRow-root')
      .first()
      .within(() => {
        // Click the expand button
        cy.get('button[aria-label*="expand row"]').click();
        cy.wait(5000)

        // Wait for the .MuiCollapse-root element to become visible

        //cy.get('h4', { timeout: 10000 }).debug()
        //cy.get('div.MuiTableContainer-root table.MuiTable-root tbody.MuiTableBody-root tr.MuiTableRow-root td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-sizeMedium div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered div.MuiCollapse-wrapper.MuiCollapse-vertical div.MuiCollapse-wrapperInner.MuiCollapse-vertical h4', { timeout: 10000 })
        cy.get('.MuiCollapse-wrapperInner',)

        // Click the collapse button
        cy.get('button[aria-label*="expand row"]').click();

        // Assert that the row is collapsed
        cy.get('div[role="cell"]').should('not.be.visible');
      });
  });
});