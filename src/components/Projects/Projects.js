import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Card from "../Cards";
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';
class ProjectContainer extends Component {
    state = {
        projects: this.props.projects || []
    };
    render() {
        return (
            <div className="card border-primary mb-3">
            <div className="card-header">
                <Pulse>
                    <h3>Projects
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </h3>
                </Pulse>
            </div>
            <div className="card-body">
                <div className="card-block">
                <div className="container">
                <Grid>
                    <Row>
                        {this
                            .state
                            .projects
                            .map(projectLine => (
                                <Col
                                    s={12}
                                    md={6}
                                    lg={4}
                                    key={projectLine
                                    .heading
                                    .toString()}>
                                    <Jump>
                                        <Card projectLine={projectLine}/>
                                    </Jump>
                                </Col>
                            ))}

                    </Row>
                </Grid>
            </div>

                </div>

            </div>
        </div>

        )
    }
}

export default ProjectContainer;
