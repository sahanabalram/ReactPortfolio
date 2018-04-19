import React, {Component} from "react";
import {Grid, Col, Row} from "react-bootstrap";
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';
import "./Cards.css";
class Card extends Component {
    constructor(props){
        super(props);
    }

    state = {
        projectLine: this.props.projectLine || []
    };
    render() {
        let projectLine = this.state.projectLine;
        return (
            <div className="card border-primary mb-3">
                <img
                    className="card-img-top"
                    src={projectLine.screenshot}
                    alt={projectLine.heading}/>
                <div className="card-body">
                    <Pulse>
                        <h4>{projectLine.heading}</h4>
                    </Pulse>
                    <p className="card-text">Project description: {projectLine.description}</p>
                    <a href={projectLine.link} className="btn btn-outline-success" target="_blank">Deployed Link</a>
                </div>
            </div>
        )
    }
}

export default Card;