describe("/login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5175/");
  });

  it("trying to navigate to home (private route) and returns to login because user is not authenticated", () => {
    cy.visit("http://localhost:5175/");
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));
  });

  it("invalid username", () => {
    cy.get("[data-cy=user-input]").type("hola");
    cy.get("[data-cy=password-input]").type("invalid{enter}");
    cy.get("div");
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));
  });

  it("invalid password", () => {
    cy.get("[data-cy=user-input]").type("123");
    cy.get("[data-cy=password-input]").type("invalid{enter}");
    cy.get("div");
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));
  });

  it("navigates to home on successful login", () => {
    cy.get("[data-cy=user-input]").type("user1");
    cy.get("[data-cy=password-input]").type("123456");
    cy.get("[data-cy=click]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/"));
  });

  it("user logs out", () => {
    cy.get("[data-cy=user-input]").type("user1");
    cy.get("[data-cy=password-input]").type("123456");
    cy.get("[data-cy=click]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/"));
    cy.get("[data-cy=hamburger]").click();
    cy.get("[data-cy=logout]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));
  });
});
