import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Navbar.scss'

export default function Navbar({ icon, title }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <h1 className="navbar-brand mb-0 font-weight-light">
                    <span className={`${icon} mr-1`}></span> { title }
                </h1>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Movie Finder',
    icon: 'fas fa-film'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}