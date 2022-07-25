import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                        </ul>

                        <div className="dropdown mx-5" >

                            <button className="btn btn-secondary rounded dropdown-toggle" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dark Mode
                            </button>

                            <ul className="dropdown-menu" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>

                                <li><a className="dropdown-item" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} href="#">

                                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                                    </div>

                                </a></li>

                                <li><a className="dropdown-item" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} href="#">

                                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                        <input className="form-check-input" type="checkbox" onClick={props.bluegMode} role="switch" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">BlueBlack Mode</label>
                                    </div>

                                </a></li>

                            </ul>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}
Navbar.propTypes = { title: propTypes.string.isRequired }
Navbar.defaultProps = { title: 'sunilrana' }
