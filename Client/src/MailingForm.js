import Countdown from './ComingSoon/CountDown';
import React, {Component} from 'react';
// no braket is for components we initiate using class ... extends component
import logo from "../src/images/drawing.svg";
import Subscribe from './ComingSoon/subscribe';
// the {} are for the components we initiate using const
import {Title} from "./ComingSoon/Title";
import {Description} from "./ComingSoon/Description";
import { Logo } from "./ComingSoon/Logo.js";


// logo from 
// https://inkscape.org/release/inkscape-1.1.1/mac-os-x/dmg/dl/
// background Patterns from
// http://www.heropatterns.com/



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
    },
    subscribe: {
      placeholder: "Enter Email Address", 
      buttonText: "Submit"
    }

  }
  
  render() { 
    const {
      countdown,
      logo, 
      title, 
      description,
      subscribe
    } = this.state;

    // want to destructure state because we dont wanna do this.state. ... each time so we can just do countdown and all
  return (
        <div className="Background">
          <h1> Coming Soon</h1>
          <Countdown futureDate = {countdown.futureDate}> </Countdown>
          <Logo alt={logo.alt} src={logo.src}></Logo>
          <Title text={title.text}></Title>
          <Description text={description.text}></Description>
          <Subscribe placeholder={subscribe.placeholder} buttonText={subscribe.buttonText}></Subscribe>
          
          
        </div>
    )};
};

export default MailingForm;