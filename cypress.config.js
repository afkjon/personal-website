require("dotenv").config();

module.exports = {
  // The rest of the Cypress config options go here...
  projectId: "iahrqw",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    googleClientId: process.env.REACT_APP_GOOGLE_CLIENTID,
    googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
};
