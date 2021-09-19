const fs = require("fs").promises
const navbarHelper = require("./helpers/navbar")

const generator = async () => {
  let testString = ``
  testString += `describe('Test Home Page', () => {`
  testString += `
    it('Load the Home page', () => {
        cy.visit('/')
    })
    `
  testString += navbarHelper()
  testString += `})`

  await fs.writeFile(`./cypress/e2e/generated/homePage.spec.js`, testString)
}

module.exports = generator
