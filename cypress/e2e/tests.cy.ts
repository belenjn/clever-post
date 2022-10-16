describe("login", () => {
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

});

describe("edit/delete posts", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5175/");
    cy.get("[data-cy=user-input]").type("user1");
    cy.get("[data-cy=password-input]").type("123456");
    cy.get("[data-cy=click]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/"));
  });

  it("edit post", () => {
    cy.get("[data-cy=edit-button]").eq(0).click();
    cy.get("[data-cy=textarea]").type("Ejemplo de body");
    cy.get("[data-cy=save-button]").click();
  });

  it("delete post", () => {
    cy.get("[data-cy=delete-button]").eq(1).click();
    cy.get("div");
  });
});

describe('logout', () => {
  beforeEach(() => {
    cy.visit("http://localhost:5175/");
    cy.get("[data-cy=user-input]").type("user1");
    cy.get("[data-cy=password-input]").type("123456");
    cy.get("[data-cy=click]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/"));
  });
  it("user logs out", () => {

    cy.get("[data-cy=hamburger]").click();
    cy.get("[data-cy=logout]").click();
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));
  });
 })
