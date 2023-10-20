import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



//rfc -> react function component
export default function NavBar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Text_Analyzer">
                    TextAnalyzer
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">
                                {props.home}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                {props.about}
                            </Link>
                        </li>


                    </ul>
                    <div className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"} mx-2`}>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.modeF} />
                        <label className="form-check-label" forHTML="flexSwitchCheckDefault" >{props.mode==="light"?"Enable":"Disable"} Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = { home: PropTypes.string, about: PropTypes.string, search: PropTypes.string }