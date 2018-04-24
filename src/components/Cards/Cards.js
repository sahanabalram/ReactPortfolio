import React, {Component} from "react";
import FlipCard from 'react-flipcard-2';
import Pulse from 'react-reveal/Pulse';
// import Jump from 'react-reveal/Jump';
import "./Cards.css";
class Card extends Component {
    getInitialState() {
        return {isFlipped: false};
    }
    showBack() {
        this.setState({isFlipped: true});
    }

    showFront() {
        this.setState({isFlipped: false});
    }

    handleOnFlip(flipped) {
        if (flipped) {
            this
                .refs
                .backButton
                .getDOMNode()
                .focus();
        }
    }

    handleKeyDown(e) {
        if (this.state.isFlipped && e.keyCode === 27) {
            this.showFront();
        }
    }
    state = {
        projectLine: this.props.projectLine || []
    };
    render() {
        let projectLine = this.state.projectLine;
        return (
            <div>
                <FlipCard>
                    <div className="card project-card border-primary mb-3">
                        <div className="card-header project-card-header">
                            <img
                                className="card-img-top"
                                src={projectLine.screenshot}
                                alt={projectLine.heading}/>
                        </div>
                        <div className="card-body project-card-body">
                            <Pulse>
                                <h4 className="project-heading">{projectLine.heading}</h4>
                            </Pulse>
                            <p className="card-text 4project-card-description">{projectLine.description}</p>
                        </div>
                        <div className="card-footer project-card-footer text-center">
                            <a href={projectLine.link} className="btn btn-outline-success" target="_blank">Deployed Link</a>
                        </div>
                    </div>
                </FlipCard>
                <FlipCard type="horizontal">
                    <div className="card project-card border-primary mb-3">
                        <div className="card-header project-card-header">
                            <p>{projectLine.technologies}</p>
                        </div>
                    </div>
                </FlipCard>

                <FlipCard
                    disabled={false}
                    flipped={this.state.isFlipped}
                    onFlip={this.handleOnFlip}
                    onKeyDown={this.handleKeyDown}>
                    <div>
                        <div>
                            <div className="card project-card border-primary mb-3">
                                <div className="card-header project-card-header">
                                    <img
                                        className="card-img-top"
                                        src={projectLine.screenshot}
                                        alt={projectLine.heading}/>
                                </div>
                                <div className="card-body project-card-body">
                                    <Pulse>
                                        <h4 className="project-heading">{projectLine.heading}</h4>
                                    </Pulse>
                                    <p className="card-text 4project-card-description">{projectLine.description}</p>
                                </div>

                                <div className="card-footer project-card-footer text-center">
                                    <a href={projectLine.link} className="btn btn-outline-success" target="_blank">Deployed Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card project-card border-primary mb-3">
                            <div className="card-header project-card-header">
                                <p>{projectLine.technologies}</p>
                            </div>
                        </div>
                    </div>
                </FlipCard>
            </div>
        )
    }
}

export default Card;