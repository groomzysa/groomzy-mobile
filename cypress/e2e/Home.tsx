describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:19006/");
  });

  it("should have search visible", () => {
    cy.get("[data-testid='search']").should("be.visible");
  });
});
