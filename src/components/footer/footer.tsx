import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
            <div className='index-heading'>
                <p>
                    <a href="https://github.com/Austionian/austionian.github.io">
                        <span className='icon'>
                            <FontAwesomeIcon icon={faGithub} />
                        </span>
                        Source Code
                    </a>
                </p>
                <p>
                    <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}
                </p>
            </div>
        </div>
    )
}

export default Footer