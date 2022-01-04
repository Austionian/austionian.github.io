import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

interface ProjectProps extends PageProps {
  data: {
    mdx: {
      body: string
      frontmatter: {
        title: string,
        date: string,
        hero_image_alt: string,
        hero_image_credit_link: string,
        hero_image_credit_text: string,
        hero_image: ImageDataLike
      }
    }
  }
}

const ProjectPost = ({ data }: ProjectProps) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <h2>{data.mdx.frontmatter.title}</h2>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <sub>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </sub>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
            
        </ul>
      </nav>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default ProjectPost