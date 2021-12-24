import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { PageProps } from 'gatsby'

const IndexPage = (props: PageProps) => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Pippa smiling."
        src="../images/pip.png"
      />
    </Layout>
  )
}

export default IndexPage