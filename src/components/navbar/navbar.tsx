import * as React from 'react'
import { Link } from 'gatsby'

import ThemeToggle from './toggle/toggle'

const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav-links">
                <li className="nav-link-item">
                    <Link className="nav-link-text" to="/">Home</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="/projects" className="nav-link-text">Projects</Link>
                </li>
                <li className="nav-link-item">
                    <Link to="https://blog.r00ks.io" className="nav-link-text">Blog</Link>
                </li>
            </ul>
            <ul className="nav-links">
                <li>
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;