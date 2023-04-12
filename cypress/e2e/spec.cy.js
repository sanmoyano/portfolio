describe("#SM Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:5173")
  })
})

//This check if the "aboutBlock" is rendering before the animation start.
describe("Render while hover", () => {
  it("renders on hover", () => {
    cy.visit("http://localhost:5173")
    cy.get("#about").trigger("mouseover")
    cy.get("#about-hover").should("be.visible")
  })
})
