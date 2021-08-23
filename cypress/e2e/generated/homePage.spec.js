describe("Test Home Page", () => {
  it("Load the Home page", () => {
    cy.visit("/")
  })

  it("Should have logo text.", () => {
    cy.get('[cy-data="logo-text"]').should("exist")
  })
})
