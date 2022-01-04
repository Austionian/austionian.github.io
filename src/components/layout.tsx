import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

import Navbar from './navbar/navbar'
import Footer from './footer/footer'

config.autoAddCss = false

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
    <div className="global-wrapper">
      <title>{pageTitle} | {data.site.siteMetadata.title }</title>
      <Navbar location={pageTitle}/>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default Layout