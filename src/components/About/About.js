import React, {Component} from 'react';
import Pulse from 'react-reveal/Pulse';
import './About.css';

class AboutContainer extends Component {
    render() {
        return (
            <div className="card border-primary mb-3">
                <div className="card-header">
                   <Pulse><h3>About <i className="fa fa-user" aria-hidden="true"></i></h3></Pulse>
                   <img className="img-responsive img-circle" src="https://media.licdn.com/dms/image/C5103AQEqYIy-Zi61fA/profile-displayphoto-shrink_200_200/0?e=1529186400&v=beta&t=vdTJ27j1ceRhq9mY0ZuMf1WUuqsgtpUU7rlYZN37uxA"  alt="Sahana Balram"/>

                </div>
                <div className="card-body">
                    <p className="card-text text-success">{this.props.personalInfo.about}</p>
                </div>
            </div>
        )
    }
}
export default AboutContainer;