import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5173",
    testIsolation: false,
    specPattern: ["cypress/e2e/loginTest.cy.ts", "cypress/e2e/homeTest.cy.ts"],
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
