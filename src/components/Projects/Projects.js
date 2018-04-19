import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Pulse from 'react-reveal/Pulse';
import Jump from 'react-reveal/Jump';
import './Projects.css';
class ProjectContainer extends Component {
    constructor(props) {
        super(props);
        // Define inline styles
        this.styles = {
            backgroundColor: this.props.projects.color || "#6fc0d1"
        };
    }
    state = {

        projects: this.props.projects || []
    };
    render() {
        return (
            <div className="container">
                {/*<h1 className="project-heading">Projects</h1>*/}
                <Grid>
                    <Row>
                        {this
                            .state
                            .projects
                            .map(projectLine => (
                                <Col s={12} md={4} lg={4}>
                                    <Jump>
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
                                    </Jump>
                                </Col>
                            ))}

                    </Row>
                </Grid>
            </div>
        )
    }
}

export default ProjectContainer;
