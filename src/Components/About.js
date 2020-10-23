import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import mystyle from './mystyle.module.css';

class About extends Component {

  render() {
    return (
      <Jumbotron style={{paddingTop:"5vw",paddingBottom:"10vw",
        paddingLeft:"15vw",paddingRight:"15vw",background: "#ffffff"}}>
        <center><h1 className={mystyle.heading}>ABOUT ME</h1></center>
        <p style={{color: "#888f89"}}>
        Java Developer having 4+ years of hands on experience of development and enhancement of
modules and applications in Healthcare, Commercial and Insurance domain projects. Possessing
outstanding communication skills in interacting with clients and providing optimal business
solutions. Seeks opportunity to play a challenging role in an environment of growth and
excellence that will help me contribute to the growth of the organization as well.
        </p>
      </Jumbotron>
    );
  }

}

export default About;
