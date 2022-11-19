import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'm7a5uz',
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
