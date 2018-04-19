import React, {Component} from 'react';
import Pulse from 'react-reveal/Pulse';
import './About.css';

class AboutContainer extends Component {
    render() {
        return (
            <div className="card border-primary mb-3">
                <div className="card-header">
                    <Pulse>
                        <h3>Profile
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </h3>
                    </Pulse>
                </div>
                <div className="card-body">
                    <div className="card-block">
                        <div className="row">
                            <div className="col-lg-6 tags p-b-2">
                                <img
                                    className="img-responsive img-circle"
                                    src="https://media.licdn.com/dms/image/C5103AQEqYIy-Zi61fA/profile-displayphoto-shrink_200_200/0?e=1529186400&v=beta&t=vdTJ27j1ceRhq9mY0ZuMf1WUuqsgtpUU7rlYZN37uxA"
                                    alt="Sahana Balram"/>
                                <p className="card-text text-success">{this.props.personalInfo.about}</p>
                            </div>

                            <div className="col-lg-4 offset-lg-1">
                                <ul>
                                    <li>Teaching Assistant - Girl Develop It</li>
                                    <li>Highly motivated and goal oriented Web Developer</li>
                                    <li>Hands on experience with web development</li>
                                    <li>Excellent communication and inter personal skills</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
export default AboutContainer;