import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import './App.css';
import JumbotronContainer from './components/Jumbotron';
import SummaryContainer from './components/Summary';
import EducationContainer from './components/Education';
import SkillContainer from './components/Skills';
import ProjectContainer from './components/Projects';
import ResumeDetails from './Resume.json';
import AboutContainer from './components/About';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>

        <JumbotronContainer personalInfo={ResumeDetails.personalInfo}/>
        <Grid>
          <Row className="main-row">
            <Col s={12} md={4} lg={3}>
              <Row><AboutContainer personalInfo={ResumeDetails.personalInfo}/></Row>
              <Row><SummaryContainer summary={ResumeDetails.summary}/></Row>
              <Row><EducationContainer education={ResumeDetails.education}/></Row>
              <Row><SkillContainer/></Row>
            </Col>
            <Col s={12} md={8} lg={9}>
              <ProjectContainer projects={ResumeDetails.projects}/>
            </Col>
          </Row>
        </Grid>
        <Footer/>
      </div>
    );
  }
}

export default App;
