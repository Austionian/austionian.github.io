import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { PageProps } from 'gatsby'

const IndexPage = (props: PageProps) => {
  return (
    <Layout pageTitle="Home Page">
     <div>
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/austin.png"
          width={200}
          height={200}
          quality={95}
          alt="Profile picture--wearing a wetsuit from surfing in a lake."
        />
        <h1 className="main-heading">Hi, I'm Austin.</h1>
      </div>
      <div>
        <p>I'm an experienced Software Engineer with a demonstrated history of working in full stack web development. Skilled in Python (Flask, Django), Typescript (React, Gatsby), CSS, and SQL (Postgres). Strong information technology professional with a Bachelor of Arts (BA) focused in English from University of Hawaii at Manoa.</p>
      </div>
    </Layout>
  )
}

export default IndexPage