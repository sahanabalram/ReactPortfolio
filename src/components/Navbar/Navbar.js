import React, {Component} from "react";
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from "react-bootstrap";
class NavbarContainer extends Component {
    render() {
        return (
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
                    <ul className="navbar-nav mr-auto">
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
        )
    }
}
export default NavbarContainer;