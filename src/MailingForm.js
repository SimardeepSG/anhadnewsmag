import Countdown from './CountDown';
import React, {Component} from 'react';
import CountDown from './CountDown';


class  MailingForm extends Component  {
  // using class here because gives acess to state object
  state = {
    countdown:{
      futureDate: "2021-12-31 00:00:00"
    }
  }
  
  render() { 
    const {
      countdown
    } = this.state;

    // want to destructure state because we dont wanna do this.state. ... each time so we can just do countdown and all
  return (
        <div className="Background">
          <h1> Coming Soon</h1>
          <Countdown futureDate = {countdown.futureDate}> </Countdown>
          
        </div>
    )};
};

export default MailingForm;