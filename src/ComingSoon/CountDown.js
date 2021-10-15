import React, {Component} from "react";
import moment, {duration} from "moment";
import '../styles/comingSoon/Countdown.css';



class CountDown extends Component {
    
    // store data  = state object
    state =  {
        days: 0, 
        hours: 0, 
        mins: 0, 
        secs: 0, 
    };
    // function to add 0's before numbers like 8 or 1 to make them 08 and 01 so they are uniform
    addZeros(value) {
        value = String(value)
        while(value.length < 2) {
            value = `0${value}`
        }
        // string interpolation to add, use ` not ' - big difference
        return value
    }
    setCountDown() {
        const futureDate = moment(this.props.futureDate)
        // moment function - getting prop from amiling form coponent - moment will give us a really cool object to work with
        const today = moment()
        // gives all infomation in object about rn
        const clockDuration = duration(futureDate.diff(today))
        // gives difference value

        const days = Math.floor(clockDuration.asDays());
        const hours = clockDuration.hours();
        const mins = clockDuration.minutes();
        const secs = clockDuration.seconds();

        this.setState({
            days: days, 
            hours: hours, 
            mins: mins, 
            secs: secs
        })
    }

    // when component mounts to page
    componentDidMount() {
        this.setCountDown();
        // this will display it immediately so that there are no 0's when page first loaded
        this.interval = setInterval(() => {
            this.setCountDown();
        }, 1000)
        // this will call it every time
    }
    // need to clean up and stop interval when component unmounts from page so not still loading in background
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (

            <div className ='countdown'>
                {/* brakcets for javascript 
                object.keys to get all values from state
                Keys = variables in state
                object.keys guves array of keys
                this.state makes it go through the keys there
                .map maps them to things*/}
                
                {Object.keys(this.state).map((key, i) => (
                    <div className="countdown-segment">
                        <span className="countdown-segment-number">
                            {this.addZeros(this.state[key])}
                            {/* for actual numbers */}
                        </span>
                        <span className="countdown-segment-caption">
                            {key.toUpperCase()}
                            {/* just acessing the words, key = variable */}

                        </span>
                    </div>
                ))}
                {/* // when we want to return everything right of arrow do not use curly brace, use parenthesis */}


            </div>
        );
    }
}

export default CountDown;
