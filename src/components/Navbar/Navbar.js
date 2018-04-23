import React, {Component} from "react";
// import {Navbar, NavItem, Nav} from "react-bootstrap";
class NavbarContainer extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#home">Sahana Balram</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto pull-right">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">Profile
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#education">Edu-Skill</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavbarContainer;