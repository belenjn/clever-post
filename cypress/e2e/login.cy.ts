describe("/login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5175/");
  });

  it("navigates to home on successful login", () => {
    cy.get("[data-cy=user-input]").type("user1");
    cy.get("[data-cy=password-input]").type("123456");
    cy.get("[data-cy=click]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/"));
    
  });
});
