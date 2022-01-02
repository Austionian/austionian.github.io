import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import { container } from './layout.module.css'
import Navbar from './navbar/navbar'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title }</title>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout