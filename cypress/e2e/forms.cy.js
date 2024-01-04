describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("shahbazalivk@gmail.com");
    cy.get("[data-test='subscribe-button']").click();
    cy.wait(3000);
    cy.contains("Successfully subbed: shahbazalivk@gmail.com!").should(
      "not.exist"
    );
    cy.get("@subscribe-input").type("shahbazalivk@gmail.io");
    cy.getDataTest("subscribe-button").click();
    cy.contains("Invalid email: shahbazalivk@gmail.io!").should("exist");
  });
});
