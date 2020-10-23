import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import bg from '../Images/sunset2.jpg';
import NavigationBar from './NavigationBar';
import Soumi from '../Images/thobra.jpg';
import {Container,Row,Col} from 'react-bootstrap';

class Intro extends Component {
  render() {
    let age=new Date().getFullYear()-1992;
    return (
      <Jumbotron style={{backgroundImage: `url(${bg})`, backgroundSize: "cover",paddingTop: "0px"}}>
          <NavigationBar/>
          <Container style={{paddingTop:"10vw",paddingBottom:"10vw"}}>
            <Row>
              <Col sm={3}>
                <img style={{width: "200px", height: "200px", overflow:"hidden", borderRadius: "100px",
                            border: "0px solid black"}} src={Soumi}/>
                <h1 style={{fontSize: "40px",fontWeight:"500",color:"#ffffff"}}>Soumi Sen</h1>
                <h1 style={{fontSize: "20px", fontWeight:"300",color:"yellow"}}>Java Developer</h1>
              </Col>
              <Col sm={6}></Col>
              <Col sm={3} style={{color: "#ffffff"}}>
                <h1 style={{fontSize: "30px",fontWeight:"400",color:"#ffffff"}}>Personal Details:</h1>
                <b>Date of Birth:</b><br/>
                16th October,1992<br/>
                <b>Age</b><br/>
                {age}<br/>
                <b>Gender:</b><br/>
                Female<br/>
                <b>Marital Status:</b><br/>
                Married<br/>
              </Col>
            </Row>
          </Container>
      </Jumbotron>
    );
  }

}

export default Intro;
