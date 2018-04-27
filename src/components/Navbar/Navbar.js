import React, {Component} from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
import  "./Navbar.css";
class NavbarContainer extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div>
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
                </div>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item nav-right">
                            <a className="nav-link" href="#profile-link">Profile
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item nav-right">
                            <a className="nav-link" href="#education-link">Edu-Skill</a>
                        </li>
                        <li className="nav-item nav-right">
                            <a className="nav-link" href="#projects-link">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default NavbarContainer;