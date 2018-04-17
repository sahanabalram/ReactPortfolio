import React, {Component} from 'react';
// import {PanelGroup, Panel, ProgressBar} from 'react-bootstrap';
import './Skills.css';
class SkillsContainer extends Component {
    render() {
        return (
            <div>
                <div className="card border-primary mb-3">
                    <div className="card-header">
                        <h2>Skills</h2>
                    </div>
                    <div className="card-body">
                        <h3 className="card-text">
                            Web Technologies
                            
                        </h3>
                        <span class="badge badge-pill badge-success">HTML</span>
                        <span class="badge badge-pill badge-success">CSS</span>
                        <span class="badge badge-pill badge-success">Javascript</span>
                        <span class="badge badge-pill badge-success">jQuery</span>
                        <span class="badge badge-pill badge-success">Node.js</span>
                        <span class="badge badge-pill badge-success">React.js</span>
                        <span class="badge badge-pill badge-success">Express</span>
                        <span class="badge badge-pill badge-success">Express.handlebars</span>
                        <span class="badge badge-pill badge-success">Wordpress</span>
                        <span class="badge badge-pill badge-success">Drupal</span>

                        <h3 className="card-text">
                            Version Control
                        </h3>
                        <span class="badge badge-pill badge-success">Git</span>
                        <span class="badge badge-pill badge-success">Github</span>
                        <span class="badge badge-pill badge-success">Bitbucket</span>

                        <h3 className="card-text">
                            Databases
                        </h3>
                        <span class="badge badge-pill badge-success">NoSQL: MongoDB,Firebase</span>
                        <span class="badge badge-pill badge-success">SQL: MySQL</span>

                        <h3 className="card-text">
                            Cloud
                        </h3>
                    <span class="badge badge-pill badge-success">Heroku</span>
                    <span class="badge badge-pill badge-success">Google Firebase</span>

                    <h3 className="card-text">
                            Testing Tools
                        </h3>
                    <span class="badge badge-pill badge-success">Mocha</span>
                    <span class="badge badge-pill badge-success">Chai</span>
                    <span class="badge badge-pill badge-success">RQM Quality Manager</span>

                    </div>
                </div>

            </div>

        )
    }
}

export default SkillsContainer;