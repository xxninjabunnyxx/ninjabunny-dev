const path = require(`path`)
const slugify = require("slugify")

const createBlogPages = async () => {}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([createBlogPages()])
}
