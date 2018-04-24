import React, {Component} from "react";
import Pulse from 'react-reveal/Pulse';
// import Jump from 'react-reveal/Jump';
import "./Cards.css";
class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
            flippedCard: false,
            projectLine: this.props.projectLine || []
        };
        this.filp = this.flip.bind(this);
    }
    flip() {
        this.setState(prevState => ({
            clicked: !prevState.clicked,
            flippedCard: !prevState.flippedCard
        }));
        console.log(this.state);
    };
    render() {
        let projectLine = this.state.projectLine;
        let flippedFront = this.state.flippedCard ? "card-back" : "card-front";
        let flippedBack = this.state.flippedCard ? "card-front" : "card-back";
        return (
            <div>
                    <div className="card project-card border-primary mb-3" onClick={(e) => this.flip(e)}>
                        <div className="card-header project-card-header">
                            <img
                                className="card-img-top"
                                src={projectLine.screenshot}
                                alt={projectLine.heading}/>
                        </div>
                        <div className={"card-body project-card-body " + flippedFront}>
                            <Pulse>
                                <h4 className="project-heading">{projectLine.heading}</h4>
                            </Pulse>
                            <p className="card-text project-card-description">{projectLine.description}</p>
                        </div>
                        <div className={"card-body project-card-body " + flippedBack}>
                            <Pulse>
                                <h4 className="project-heading">{projectLine.technologies}</h4>
                            </Pulse>
                        </div>
                        <div className="card-footer project-card-footer text-center">
                            <a href={projectLine.link} className="btn btn-outline-success" target="_blank">Deployed Link</a>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Card;