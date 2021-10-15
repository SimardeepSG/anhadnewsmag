import Countdown from './ComingSoon/CountDown';
import React, {Component} from 'react';
import {title} from "./ComingSoon/Title";
import {description} from "./ComingSoon/Description";
import { Logo } from "./ComingSoon/Logo.js";
import logo from "../src/images/drawing.svg";

// logo from 
// https://inkscape.org/release/inkscape-1.1.1/mac-os-x/dmg/dl/



class  MailingForm extends Component  {
  // using class here because gives acess to state object
  state = {
    countdown: {
      futureDate: "2021-12-31 00:00:00"
    },
    title: {
      text: "Coming Soon"
    },
    description: {
      text: "WJKK WJKK elcome to the time issue"
    },
    logo: {
      alt: "Spining Gear",
      src: logo
    }

  }
  
  render() { 
    const {
      countdown,
      logo
    } = this.state;

    // want to destructure state because we dont wanna do this.state. ... each time so we can just do countdown and all
  return (
        <div className="Background">
          <h1> Coming Soon</h1>
          <Countdown futureDate = {countdown.futureDate}> </Countdown>
          <Logo alt={logo.alt} src={logo.src}></Logo>
          
          
        </div>
    )};
};

export default MailingForm;