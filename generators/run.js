const homePageTest = require(`./cypress/homepage`)

const run = async () => {
  await Promise.all([homePageTest()])
}

run()
