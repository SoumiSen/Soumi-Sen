import React, { Component } from 'react';
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';
import Skills from './Skills';
import Contact from './Contact';
import mystyle from './mystyle.module.css';
import bg from '../Images/bg4.jpg';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

class Home extends Component {

  render() {
    return (
      <div>
      <div style={{background:"white"}}>
        <div className={mystyle.iconbar}>
          <Link to="/facebook" >
            <FontAwesomeIcon icon={faFacebook} size="2x"/><br/>
          </Link>
          <Link to="/linkedin">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/><br/>
          </Link>
          <Link to="/github">
            <FontAwesomeIcon icon={faGithub} size="2x"/><br/>
          </Link>
          <Link to="/youtube">
            <FontAwesomeIcon icon={faYoutube} size="2x"/><br/>
          </Link>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${bg})`, backgroundAttachment: "fixed",
                      backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <div style={{background:"#ffffff"}}>
          <Intro/>
          <About/>
        </div>
        <Experiences/>
        <div style={{background: "#000000"}}>
          <Skills/>
          <Contact/>
        </div>
      </div>
      </div>
    );
  }

}

export default Home;
