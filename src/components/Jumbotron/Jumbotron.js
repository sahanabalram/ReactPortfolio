import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import HeadShake from 'react-reveal/HeadShake';
import './Jumbotron.css';
class JumbotronContainer extends Component {
    
    state = {
        info: this.props.personalInfo || []
    };
    render() {
        return (
            <Jumbotron>
           <HeadShake><h1 className="text-center ">{this.props.personalInfo.name}</h1></HeadShake>
                <p className="text-center">{this.props.personalInfo.location}</p>
                <p className="text-center">
                    {/*Place this tag where you want the button to render.*/}
                    <a
                        className="github-button"
                        href={this.props.personalInfo.github}
                        aria-label="Follow @ntkme on GitHub">Follow @sahanabalram</a>
                    <a href={this.props.personalInfo.linkedIn} target="_blank">
                        <i className="fa fa-linkedin fa-3x"></i>
                    </a>
                </p>
            </Jumbotron>
        )
    }
}

export default JumbotronContainer;