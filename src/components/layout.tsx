import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Navbar from './navbar/navbar'
import Footer from './footer/footer'

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