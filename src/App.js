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
          <Row className="about-row">
            <AboutContainer personalInfo={ResumeDetails.personalInfo}/>
            {/*<SummaryContainer summary={ResumeDetails.summary}/>*/}
          </Row>
          <Row className="main-row">
            <Col s={12} md={6} lg={6}>
              <EducationContainer education={ResumeDetails.education}/>
              </Col>
              <Col s={12} md={6} lg={6}>
              <SkillContainer/>
            </Col>
          </Row>
          <Row className="project-row">
            <ProjectContainer projects={ResumeDetails.projects}/>
          </Row>
        </Grid>
        <Footer/>
      </div>
    );
  }
}

export default App;
