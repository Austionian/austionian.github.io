import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Apps">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id} className='post-list-item'>
            <h2>
              <Link to={`/apps/${node.slug}`}>
                # {node.frontmatter.title}
              </Link>
            </h2>
            <p>
              {node.frontmatter.gist}
            </p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          gist
        }
        id
        slug
      }
    }
  }
`

export default BlogPage