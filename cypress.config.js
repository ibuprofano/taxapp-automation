//const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const environment = config.env.environment || "staging"
      const urls = {
        qa: "https://qa.taxrms.rgbrenner.com/auth",
        staging: "https://stg.taxrms.rgbrenner.com/auth",
        prod: "https://taxrms.rgbrenner.com/auth"
        
      }
      const credentials = {
        qa: "admin@rgbrenner.com",
        staging: "matias.diego@rgbrenner.com",
        prod: "taxpreparer.testing@rgbrenner.com"
      }

      const userName = {
        qa: 'Admin Admin',
        staging: 'Matias Diego test',
        prod: 'TaxPreparer Test'
      }

      config.baseUrl = urls[environment]
      config.env = {
        userName: credentials[environment],
        userFullName: userName[environment]

        }
      return config
    },

    //env : {

    //}
    //baseUrl: "https://stg.taxrms.rgbrenner.com/auth"
  },
});
