import React, {Component} from 'react';
// import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './Summary.css';


class SummaryContainer extends Component {
    state = {
        summary : this.props.summary || []
      };
    render() {
        return (
            <div className="card border-primary mb-3">
                <div className="card-header">
                <h2>Summary <i class="fa fa-list-alt" aria-hidden="true"></i></h2>
                </div>
                <div className="card-body">
                    <p className="card-text text-success">{this.state.summary.map(summaryLine =>(
                        <p>{summaryLine}</p>
                    ))}</p>
                </div>
            </div>
        )   
    }
}


export default SummaryContainer;