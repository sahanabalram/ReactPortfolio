import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './Projects.css';
class ProjectContainer extends Component {
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
                                    <div
                                        className="card text-white bg-primary mb-3 card-rotating effect__click"
                                        id="card-1">
                                        <div className="card-header">
                                            <h2>{projectLine.heading}</h2>
                                        </div>
                                        <div className="card-body">
                                            <img
                                                className="project-image"
                                                src={projectLine.screenshot}
                                                alt={projectLine.heading}/>

                                            <p className="card-text">
                                                Project Description: {projectLine.description}

                                                <p>
                                                    <a className="anchor-link" href={projectLine.link} target="_blank">
                                                        <button type="button" class="btn btn-outline-success">Deployed Link</button>
                                                    </a>
                                                    <p>Technologies used: {projectLine.technologies}</p>
                                                </p>

                                            </p>

                                        </div>
                                    </div>
                                </Col>
                            ))}

                    </Row>
                </Grid>
            </div>
        )
    }
}

export default ProjectContainer;
