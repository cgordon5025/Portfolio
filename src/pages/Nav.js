import React from "react";
import { Outlet, Link } from 'react-router-dom'
import ProjectList from './ProjectList'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'
function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/project">Projects</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
