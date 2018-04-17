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
                    <Pulse><h3 id="education">Education <i class="fa fa-graduation-cap" aria-hidden="true"></i></h3></Pulse>
                    </div>
                    <div className="card-body">
                        <p className="card-text text-success">{this.state.education.map(educationLine => (<p>{educationLine.degree} {educationLine.university}<span class="badge badge-pill badge-primary">{educationLine.year}</span></p>
                            
                        ))}</p>

                    </div>
                </div>

            </div>
        )
    }
}

export default EducationContainer;
