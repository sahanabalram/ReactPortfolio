import React, {Component} from 'react';
import Pulse from 'react-reveal/Pulse';
import './Skills.css';
class SkillsContainer extends Component {
    render() {
        return (
            <div>
            <div className="card border-primary mb-3">
                <div className="card-header">
                    <Pulse>
                        <h3>Skills
                            <i className="fa fa-cogs" aria-hidden="true"></i>
                        </h3>
                    </Pulse>
                </div>
                <div className="card-body">
                    <h3 className="card-text skills">Web Technology <i className="fa fa-laptop" aria-hidden="true"></i></h3>
                    <span className="badge badge-pill badge-success">HTML</span>
                    <span className="badge badge-pill badge-success">CSS</span>
                    <span className="badge badge-pill badge-success">Javascript</span>
                    <span className="badge badge-pill badge-success">jQuery</span>
                    <span className="badge badge-pill badge-success">Node.js</span>
                    <span className="badge badge-pill badge-success">React.js</span>
                    <span className="badge badge-pill badge-success">Express</span>
                    <span className="badge badge-pill badge-success">Express.handlebars</span>
                    <span className="badge badge-pill badge-success">Wordpress</span>
                    <span className="badge badge-pill badge-success">Drupal</span>

                    <h3 className="card-text skills">
                        Version Control <i className="fa fa-code-fork" aria-hidden="true"></i>

                    </h3>
                    <span className="badge badge-pill badge-success">Git</span>
                    <span className="badge badge-pill badge-success">Github</span>
                    <span className="badge badge-pill badge-success">Bitbucket</span>

                    <h3 className="card-text skills">
                        Databases <i className="fa fa-database" aria-hidden="true"></i>
                    </h3> 
                    <span className="badge badge-pill badge-success">NoSQL: MongoDB,Firebase</span>
                    <span className="badge badge-pill badge-success">SQL: MySQL</span>

                    <h3 className="card-text skills">
                        Cloud <i className="fa fa-cloud" aria-hidden="true"></i>
                    </h3>
                    <span className="badge badge-pill badge-success">Heroku</span>
                    <span className="badge badge-pill badge-success">Google Firebase</span>

                    <h3 className="card-text skills">
                        Testing Tools <i className="fa fa-check" aria-hidden="true"></i>

                    </h3>
                    <span className="badge badge-pill badge-success">Mocha</span>
                    <span className="badge badge-pill badge-success">Chai</span>
                    <span className="badge badge-pill badge-success">RQM Quality Manager</span>

                </div>
            </div>

        </div> 
        )
    }
}

export default SkillsContainer;