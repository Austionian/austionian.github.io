import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { PageProps } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import Seo from '../components/seo'
import WavingHand from '../components/handwave'

const IndexPage = (props: PageProps) => {
  return (
    <Layout pageTitle="About">
      <Seo title="About" />
      <div className="index-container">
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
        <h1 className="main-heading"><WavingHand />{` `}Hi, I'm Austin</h1>
        <h4 className="main-subheading">Software Engineer{" & "}Lake Michigan Surfer</h4>
        <p className='main-buttons'>
          <a href="/apps" className='button button-lg'>
            <span className='icon'>
              <FontAwesomeIcon icon={faCodeBranch} />
            </span>
            <span>Apps</span>
          </a>
          <a href="https://github.com/austionian" className='button button-lg'>
            <span className='icon'>
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <span>Code</span>
          </a>
          <a href="mailto:austin@r00ks.io" className='button button-lg'>
            <span className='icon'>
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
            <span>Email</span>
          </a>
        </p>
        <p>I'm an experienced Software Engineer with a demonstrated history of working in full stack web development. Skilled in Python (Flask, Django), Typescript (React, Gatsby), CSS, and SQL (Postgres). Strong information technology professional with a Bachelor of Arts (BA) focused in English from University of Hawaii at Manoa.</p>
      </div>
    </Layout>
  )
}

export default IndexPage