const { siteTitle } = require("../../../src/settings/settings.json")

const navbarHelper = () => {
  helperString = ``
  helperString += `
    it('Should have logo text.', () => {
        cy.get('[cy-data="logo-text"]').should('exist')
    })
    `
  //helperString += `
  //  it('Logo text should be the the same that is in the settings.', () => {
  //      cy.get('[cy-data="logo-text"]').should('have.text', ${siteTitle})
  //  })
  //  `
  //helperString += `
  //it('Logo text should link to the Home page.', () => {
  //    cy.get('[cy-data="logo-text"]').should('exist')
  //})
  //`
  // text should be from setting
  //helperString += `
  //it('Logo text shuld have background.', () => {
  //    cy.get('[cy-data="logo-text-background"]').should('exist')
  //})
  //`
  //helperString += `
  //it('Should have GitHub icon.', () => {
  //    cy.get('[cy-data="github-icon"]').should('exist')
  //})
  //`
  //helperString += `
  //it('Should have GitHub link.', () => {
  //    cy.get('[cy-data="github-link"]').should('exist')
  //})
  //`
  //// link should be from setting
  //helperString += `
  //it('Should have Twitter icon.', () => {
  //    cy.get('[cy-data="twitter-icon"]').should('exist')
  //})
  //`
  //helperString += `
  //it('Should have Twitter link.', () => {
  //    cy.get('[cy-data="twitter-link"]').should('exist')
  //})
  //`
  //// link should be from setting
  //helperString += `
  //it('Should have Instagram icon.', () => {
  //    cy.get('[cy-data="instagram-icon"]').should('exist')
  //})
  //`
  //helperString += `
  //it('Should have Instagram link.', () => {
  //    cy.get('[cy-data="instagram-link"]').should('exist')
  //})
  //`
  //// link should be from setting
  //helperString += `
  //it('Should have Blog category.', () => {
  //    cy.get('[cy-data="blog-category"]').should('exist')
  //})
  //`
  //helperString += `
  //it('Should have Blog link.', () => {
  //    cy.get('[cy-data="blog-category-link"]').should('exist')
  //})
  //`
  //// link should be /blog
  //helperString += `
  //it('Should have About category.', () => {
  //    cy.get('[cy-data="about-category"]').should('exist')
  //})
  //`
  //helperString += `
  //it('Should have About link.', () => {
  //    cy.get('[cy-data="about-category-link"]').should('exist')
  //})
  //`
  //// link should be /about
  //helperString += `
  //it('Should have Projects category.', () => {
  //    cy.get('[cy-data="projects-category"]').should('exist')
  //})
  //`
  //helperString += `
  //it('Should have Projects link.', () => {
  //    cy.get('[cy-data="projects-category-link"]').should('exist')
  //})
  //`
  //// link should be /projects
  return helperString
}

module.exports = navbarHelper
