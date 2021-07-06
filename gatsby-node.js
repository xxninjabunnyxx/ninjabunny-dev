const path = require("path");
const slugify = require("slugify");

const createPages = async ({ graphql, actions, type, prefix }) => {
  const template = path.resolve("./src/templates/Page.js");

  const { errors, data } = await graphql(`
    query pageQuery {
      allMdx(filter: {fileAbsolutePath: {regex: "/content/${type}/"}}) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
    `);

  data.allMdx.edges.map((edge) => {
    actions.createPage({
      component: template,
      path:
        type === "page"
          ? slugify(edge.node.frontmatter.title, {
              lower: true,
            })
          : `${prefix}/${slugify(edge.node.frontmatter.title, {
              lower: true,
            })}`,
      context: {
        id: edge.node.id,
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    createPages({ graphql, actions, type: "posts", prefix: "post" }),
  ]);
};
