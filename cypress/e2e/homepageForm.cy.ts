describe("Homepage form", () => {
  it("Shows ZIP input in the hero section", () => {
    cy.visit("http://localhost:5173/");
    cy.get("form")
      .contains("label", "Your zip code (US only)")
      .parent()
      .find("input")
      .should("be.visible");
  });

  it("Shows CTA button with correct text", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Get The Best Rate").should("be.visible");
  });

  it("Shows an error when empty ZIP entered", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Get The Best Rate").click();
    cy.contains("Please confirm your location").should("not.exist");
    cy.contains("Please enter a valid US zip code").should("be.visible");
  });

  it("Shows an error when invalid ZIP entered", () => {
    cy.visit("http://localhost:5173/");
    cy.get("form")
      .contains("label", "Your zip code (US only)")
      .parent()
      .find("input")
      .type("33333");
    cy.contains("Get The Best Rate").click();
    cy.contains("Please confirm your location").should("not.exist");
    cy.contains("Please enter a valid US zip code").should("be.visible");
  });

  it("Shows congratulation message when form submitted correctly", () => {
    cy.visit("http://localhost:5173/");
    cy.get("form")
      .contains("label", "Your zip code (US only)")
      .parent()
      .find("input")
      .type("33022");
    cy.contains("Get The Best Rate").click();
    cy.contains("Please confirm your location").should("be.visible");
    cy.contains("Correct").click();
    cy.contains("What type of project").should("be.visible");
    cy.contains("Next").click();
    cy.contains("Please choose at least one option").should("be.visible");
    cy.get("form").contains("label", "Flood Insurance").click();
    cy.contains("Next").click();
    cy.contains("Thank you!").should("be.visible");
    cy.contains("Submit").click();
    cy.contains("Please fill in your email").should("be.visible");
    cy.get("form")
      .contains("label", "Email")
      .parent()
      .find("input")
      .type("test@gmail.com");
    cy.contains("Please fill in your email").should("not.exist");
    cy.contains("Submit").click();
    cy.contains("Congrats!").should("be.visible");
  });
});
