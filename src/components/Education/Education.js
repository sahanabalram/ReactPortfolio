import React, {Component} from 'react';
import Pulse from 'react-reveal/Pulse';
import './Education.css';
class EducationContainer extends Component {
    state = {
        education: this.props.education || []
    };
    render() {
        return (
            <div>
                <div className="card border-primary mb-3">
                    <div className="card-header">
                        <Pulse>
                            <h3 id="education">Education
                                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                            </h3>
                        </Pulse>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{this
                                .state
                                .education
                                .map(educationLine => (
                                    <p key={educationLine.toString()}>
                                        <span className="edu-degree">{educationLine.degree}</span>
                                        <br/> <span>{educationLine.university} ({educationLine.year})</span>
                                    </p>

                                ))}</p>

                    </div>
                </div>

            </div>
        )
    }
}

export default EducationContainer;
