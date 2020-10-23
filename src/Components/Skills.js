import React, { Component } from 'react';
import {Jumbotron,ProgressBar,Container,Row,Col} from 'react-bootstrap';
import mystyle from './mystyle.module.css';
import bg from '../Images/code.jpg';

class Skills extends Component {

  render() {
    return (
      <Jumbotron style={{backgroundImage: `url(${bg})`, backgroundSize: "cover"}}>
        <center><h1 className={mystyle.heading}>SKILLS</h1></center>
        <p className={mystyle.subj} style={{color:"#ffffff"}}>I have 4 years hands on experience in Core Java, REST webservices:JAX-RS
        Spring Boot and Hibernate, Oracle DB, PL/SQL and have worked on Agile methodologies. I also have experience
        in different phases of Software Development Life Cycle including Design, Implementation and Testing. My
        main skills are:<br/></p>
        <Container style={{color: "#ffffff"}}>
        <br/><br/>
          <h1 className={mystyle.expdes}>Technologies and Frameworks:</h1>
          <Row>
            <Col>
              Core Java<br/>
              <ProgressBar variant="success" now={100}/>
            </Col>
            <Col>
              Java EE<br/>
              <ProgressBar variant="success" now={100}/>
            </Col>
          </Row>
          <Row>
            <Col>
              Spring and Hibernate<br/>
              <ProgressBar variant="success" now={100}/>
            </Col>
            <Col>
              J2EE<br/>
              <ProgressBar variant="success" now={100}/>
            </Col>
          </Row>
          <br/><br/>
          <h1 className={mystyle.expdes}>Programming Languages:</h1>
          <Row>
            <Col>
              Java<br/>
              <ProgressBar variant="success" now={100}/>
            </Col>
            <Col>
              HTML, CSS & JavaScript<br/>
              <ProgressBar variant="success" now={100}/>
            </Col>
          </Row>
          <Row>
            <Col>
              C<br/>
              <ProgressBar variant="success" now={100}/>
            </Col>
            <Col>
              UNIX shell scripting<br/>
              <ProgressBar variant="success" now={85}/>
            </Col>
          </Row>
          <br/><br/>
          <h1 className={mystyle.expdes}>Additional Tools and IDEs:</h1>
          <Row>
            <Col>
              Eclipse IDE<br/>
              <ProgressBar variant="success" now={100}/>
            </Col>
            <Col>
              JIRA<br/>
              <ProgressBar variant="success" now={100}/>
            </Col>
          </Row>
          <Row>
            <Col>
              IBM Data Studio<br/>
              <ProgressBar variant="success" now={100}/>
            </Col>
            <Col>
              Bit Bucket and Git Repositories<br/>
              <ProgressBar variant="success" now={85}/>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }

}

export default Skills;
