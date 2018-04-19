import React, {Component} from "react";
import Pulse from 'react-reveal/Pulse';
// import Jump from 'react-reveal/Jump';
import "./Cards.css";
class Card extends Component {
    state = {
        projectLine: this.props.projectLine || []
    };
    render() {
        let projectLine = this.state.projectLine;
        return (
            <div className="card project-card border-primary mb-3">
                <div className="card-header project-card-header">
                    <img
                        className="card-img-top"
                        src={projectLine.screenshot}
                        alt={projectLine.heading}/>
                </div>

                <div className="card-body project-card-body">
                    <Pulse>
                        <h4>{projectLine.heading}</h4>
                    </Pulse>
                    <p className="card-text 4project-card-description">{projectLine.description}</p>
                </div>
                <div className="card-footer project-card-footer text-center">
                    <a href={projectLine.link} className="btn btn-outline-success" target="_blank">Deployed Link</a>
                </div>
            </div>
        )
    }
}

export default Card;