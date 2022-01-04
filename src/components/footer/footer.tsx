import * as React from 'react'

const Email = require('../../assets/email.svg')
const Github = require('../../assets/github.svg')

const Footer = () => {
    return (
        <div>
            <p>
            Contact me here &nbsp;
                <a href="mailto:austin@r00ks.io">
                    <Email 
                        className="social-icon"
                        alt="email icon"
                    />
                </a>
            </p>
            <br />
            <div className='index-heading'>
                <p>
                    <a href="https://github.com/Austionian/austionian.github.io">
                        <Github className='social-icon' />
                        {" "}Source Code
                    </a>
                </p>
                <p>
                    © {new Date().getFullYear()}
                </p>
            </div>
        </div>
    )
}

export default Footer