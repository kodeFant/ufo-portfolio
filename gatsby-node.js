/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const locale = require("date-fns/locale")
const formatDistanceStrict = require("date-fns/formatDistanceStrict")
const path = require(`path`)
const produce = require("immer")
var parse = require("date-fns/parse")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/portfolioTemplate.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___finished] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              started
              finished
              logo
            }
          }
        }
      }
    }
  `)
  const posts = result.data.allMarkdownRemark.edges
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  posts.forEach(({ node }, index) => {
    const startedDate = parse(
      node.frontmatter.started,
      "yyyy-MM-dd",
      new Date()
    )
    const finishedDate = parse(
      node.frontmatter.finished,
      "yyyy-MM-dd",
      new Date()
    )

    createPage({
      path: `portfolio/${node.frontmatter.path}`,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.path,
        prev:
          index === 0
            ? posts[posts.length - 1].node.frontmatter.path
            : posts[index - 1].node.frontmatter.path,
        next:
          index === posts.length - 1
            ? posts[0].node.frontmatter.path
            : posts[index + 1].node.frontmatter.path,
        duration: formatDistanceStrict(startedDate, finishedDate, {
          locale: locale.nb,
        }),
        logo: node.frontmatter.logo,
      }, // additional data can be passed via context
    })
  })
}
