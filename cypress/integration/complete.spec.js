describe("Cecotec End to End Testing", () => {
  before(() => {
    sessionStorage.clear();
  });

  it("Forgot password message", () => {
    cy.visit("http://localhost:3000");
    cy.get(".login-form-forgot").click();
    cy.get("#email").type("myEmail@email.com");
    cy.get(".ant-btn").click();

    cy.wait(1100);

    cy.get("p").should(
      "contain",
      "This message is a lie, for the moment this is just a test. Maybe in the future if I am hired I will make this feature ^_^"
    );
  });

  it("Login user", () => {
    cy.visit("http://localhost:3000");
    cy.get("#username").type("MyUser");
    cy.get("#password").type("MyPassword");
    cy.get(".ant-btn").click();
  });

  it("Clients", () => {
    // Go to Clients
    cy.get(".ant-menu > :nth-child(2)").click();
    cy.wait(1100);

    // Add new client
    cy.get(".site-layout-background > :nth-child(2)").click();
    cy.get("#userForm_name").type("New Client");
    cy.get("#userForm_address").type("Client Address");
    cy.get(".ant-btn-primary > span").click();
    cy.wait(2200);

    cy.get("#client-New-Client");
    cy.get("#client-New-Client").should("contain", "New");
    cy.get("#client-New-Client").should("contain", "Client");

    // Update Client
    cy.get(
      "#client-New-Client > .ant-list-item-action > :nth-child(1) > .ant-btn > span"
    ).click();
    cy.get("#userForm_name").clear().type("Update Client");
    cy.get("#userForm_address").clear().type("Actual Address");
    cy.get(".ant-btn-primary > span").click();
    cy.wait(2200);

    cy.get("#client-Update-Client").should("contain", "Update");
    cy.get("#client-Update-Client").should("contain", "Actual");

    // Delete Client
    cy.get(
      "#client-Update-Client > .ant-list-item-action > :nth-child(2) > .ant-btn > span"
    ).click();
    cy.get(".ant-btn-dangerous").click();
    cy.wait(1100);

    cy.get(".ant-list-items > #client-Update-Client").should("not.exist");
  });

  it("Products", () => {
    // Go to Products
    cy.get(".ant-menu > :nth-child(3)").click();
    cy.wait(1100);

    // Add new Product
    cy.get(".site-layout-background > :nth-child(2)").click();
    cy.get("#userForm_name").type("New Product");
    cy.get("#userForm_price").type("250");
    cy.get("#userForm_quantity").type("3");
    cy.get(".ant-btn-primary > span").click();
    cy.wait(2200);

    cy.get("#product-New-Product > .ant-list-item-meta").should(
      "contain",
      "New"
    );
    cy.get("#product-New-Product > .ant-list-item-meta").should(
      "contain",
      "250"
    );
    cy.get("#product-New-Product > .ant-list-item-meta").should("contain", "3");

    // Update Product
    cy.get(
      "#product-New-Product > .ant-list-item-action > :nth-child(1) > .ant-btn > span"
    ).click();
    cy.get("#userForm_name").clear().type("Update Product");
    cy.get("#userForm_price").clear().type("753");
    cy.get("#userForm_quantity").clear().type("4");
    cy.get(".ant-btn-primary > span").click();
    cy.wait(2200);

    cy.get("#product-Update-Product > .ant-list-item-meta").should(
      "contain",
      "Update"
    );
    cy.get("#product-Update-Product > .ant-list-item-meta").should(
      "contain",
      "753"
    );
    cy.get("#product-Update-Product > .ant-list-item-meta").should(
      "contain",
      "4"
    );

    // Delete Product
    cy.get(
      "#product-Update-Product > .ant-list-item-action > :nth-child(2) > .ant-btn > span"
    ).click();
    cy.get(".ant-btn-dangerous").click();
    cy.wait(1100);

    cy.get(".ant-list-items > #product-Update-Product").should("not.exist");
  });

  it("Logout", () => {
    cy.get(".ant-menu > :nth-child(4)").click();
    cy.get(".ant-btn-dangerous").click();
    cy.get(".auth-form").should("exist");
  });
});
