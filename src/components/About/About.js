import React, {Component} from 'react';
import {Zoom} from 'react-reveal';
import './About.css';

class AboutContainer extends Component {
    render() {
        return (
            <div className="card border-primary mb-3">
                <div className="card-header">
                   <h2>About</h2>
                </div>
                <div className="card-body">
               <Zoom> <img className="img-responsive img-circle" src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAIA_wDGAAAAAQAAAAAAAA1IAAAAJDVhM2ExZThhLWJiNGYtNDAxNi1hZjBkLTc4OThmNDhiOWQ5Mw.jpg"  alt="Sahana Balram"/></Zoom>
                    <p className="card-text text-success">{this.props.personalInfo.about}</p>
                </div>
            </div>
        )
    }
}
export default AboutContainer;