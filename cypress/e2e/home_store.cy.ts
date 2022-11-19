import { PAGE_SIZE } from "@shared/constants/pagination";
import { sleep } from "@shared/utils/async";

const waitForFetch = () => sleep(2000);

describe("App home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("Home page renders", () => {
    cy.contains("Home");
  });

  it("Products feed", () => {
    // Check if products has been fetched
    cy.get('[data-test-id="products-list"]')
      .children()
      .should("have.length", PAGE_SIZE);
  });

  it("Products scroll pagination", async () => {
    await waitForFetch();

    // Scroll
    cy.get('[data-test-id="layout-container"]').scrollTo("0%", "100%");

    // Check if next page has been fetched
    cy.get('[data-test-id="products-list"]')
      .children()
      .should((products) => {
        expect(products).greaterThan(PAGE_SIZE);
      });
  });

  it("Search Nike products", async () => {
    // Search nike
    const name = "searchKeyword";

    cy.get(`input[name="${name}"]`).type("Nike");
    cy.get(`[data-test-id="search-${name}"]`).click();

    await waitForFetch();

    // Check if products contains Nike
    cy.get('[data-test-id="products-list"]')
      .children()
      .should((products) => {
        const firstProduct = products[0];
        expect(firstProduct).to.contain.text("Nike");
      });
  });
});
