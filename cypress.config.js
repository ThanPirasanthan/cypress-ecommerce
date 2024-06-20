const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    "env": {
      "username":"Username123",
      "password":"Testing_Password1234!"
      },
    "chromeWebSecurity": false,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});

