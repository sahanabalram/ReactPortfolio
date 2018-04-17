import React, {Component} from 'react';
// import {ListGroup, ListGroupItem} from 'react-bootstrap';
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
                    <h2>Education <i class="fa fa-graduation-cap" aria-hidden="true"></i></h2>
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
