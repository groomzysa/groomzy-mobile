import React from "react";
import { GSearch } from "../../src/components";

const Component = () => {
  return <GSearch />;
};

describe("<GSearch />", () => {
  beforeEach(() => {
    cy.mount(<Component />);
  });

  it("should be mounted", () => {
    cy.get("[data-testid='search']").should("be.visible");
  });

  it("should have placeholder", () => {
    cy.get("[data-testid='search']").should(
      "have.attr",
      "placeholder",
      "Search for service provider"
    );
  });
});
