import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Card from "../Cards";
import Jump from 'react-reveal/Jump';
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
                                <Col s={12} md={6} lg={4} key={projectLine.toString()}>
                                    <Jump>
                                        <Card  projectLine={projectLine}/>
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
