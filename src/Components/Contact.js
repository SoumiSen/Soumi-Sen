import React, { Component } from 'react';
import {Jumbotron,Container,Row,Col} from 'react-bootstrap';
class Contact extends Component {

  render() {
    return (
      <Jumbotron style={{background: "#000000",color:"#03befc"}}>
      <Container>
        <Row>
          <Col>
            <h1 style={{fontSize: "30px",fontWeight:"500"}}>Contact Me:</h1>
          </Col>
          <Col>
            <b>Email:</b><br/>
              <a href="mailto:reenisoumi@gmail.com">reenisoumi@gmail.com</a><br/><br/>
            <b>Phone:</b><br/>
            +91  8904031837<br/><br/>
            <b>Address:</b><br/>
              <br/>
          </Col>
        </Row>
      </Container>
      </Jumbotron>
    );
  }

}

export default Contact;
