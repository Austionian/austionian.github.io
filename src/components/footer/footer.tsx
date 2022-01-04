import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCopyright} />{" "}{new Date().getFullYear()}
            {` | `}
            Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
            {` | `}
            <a href="https://github.com/Austionian/austionian.github.io">
                Source Code
            </a>
        </div>
    )
}

export default Footer