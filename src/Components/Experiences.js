import React, { Component } from 'react';
import {Jumbotron,Container,Row,Col} from 'react-bootstrap';
import mystyle from './mystyle.module.css';


class Experiences
 extends Component {

  render() {
    return (
      <Jumbotron style={{background:"transparent",color:"#ffffff"}}>
      <Container>
        <Row>
          <Col sm={6}>
            <h1 className={mystyle.heading} style={{paddingBottom: "5vw"}}>Experiences</h1>
            <Container>
              <Row style={{paddingBottom: "5vw"}}>
                <Col sm={6}>
                  <h1 className={mystyle.expheadings}>2020</h1>
                  <h1 className={mystyle.expdes}>Ummmm</h1>
                </Col>
                <Col sm={6}>
                  <h1 className={mystyle.expheadings}>Infosys</h1>
                  <h1 className={mystyle.subj}>Ummmmmmmmmm</h1>
                </Col>
              </Row>
              <Row style={{paddingBottom: "5vw"}}>
                <Col sm={6}>
                  <h1 className={mystyle.expheadings}>2020</h1>
                  <h1 className={mystyle.expdes}>DC Analyst</h1>
                </Col>
                <Col sm={6}>
                  <h1 className={mystyle.expheadings}>Deloitte Consulting USI</h1>
                  <h1 className={mystyle.subj}>Working on development and enhancement of the Scheme Website and integration with
back-end data for a US based Healthcare project’s Provider Care Management
System.</h1>
                </Col>
              </Row>
              <Row style={{paddingBottom: "5vw"}}>
                <Col sm={6}>
                  <h1 className={mystyle.expheadings}>2015</h1>
                  <h1 className={mystyle.expdes}>Systems Engineer</h1>
                </Col>
                <Col sm={6}>
                  <h1 className={mystyle.expheadings}>Tata Consultancy Services</h1>
                  <h1 className={mystyle.subj}>Worked as a senior team member with composite knowledge of different modules of a
Pension Scheme project which includes development and maintenance of the Scheme
Website and integration of back-end data.</h1>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={6}>
            <h1 className={mystyle.heading} style={{paddingBottom: "5vw"}}>Education</h1>
            <Container>
            <Row style={{paddingBottom: "5vw"}}>
              <Col sm={6}>
                <h1 className={mystyle.expheadings}>2015</h1>
                <h1 className={mystyle.expdes}>Computer Science</h1>
              </Col>
              <Col sm={6}>
                <h1 className={mystyle.expheadings}>MCKVIE</h1>
                <h1 className={mystyle.subj}>Bachelor's of Technology from West Bengal University of Technologies
                with a CGPA of 8.3</h1>
              </Col>
            </Row>
            <Row style={{paddingBottom: "5vw"}}>
              <Col sm={6}>
                <h1 className={mystyle.expheadings}>2011</h1>
                <h1 className={mystyle.expdes}>Science</h1>
              </Col>
              <Col sm={6}>
                <h1 className={mystyle.expheadings}>Tarasundari Balika Vidyabhavan</h1>
                <h1 className={mystyle.subj}>Higher Secondary from W.B.C.H.S.E with 75% marks.</h1>
              </Col>
            </Row>
            <Row style={{paddingBottom: "5vw"}}>
              <Col sm={6}>
                <h1 className={mystyle.expheadings}>2009</h1>
                <h1 className={mystyle.expdes}></h1>
              </Col>
              <Col sm={6}>
                <h1 className={mystyle.expheadings}>Tarasundari Balika Vidyabhavan</h1>
                <h1 className={mystyle.subj}>Secondary from W.B.B.S.E with 87% marks.</h1>
              </Col>
            </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      </Jumbotron>
    );
  }

}

export default Experiences
;
