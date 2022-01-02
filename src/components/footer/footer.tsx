import * as React from 'react'

const Email = require('../../assets/email.svg')

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
            <p>
                © {new Date().getFullYear()}
            </p>
        </div>
    )
}

export default Footer