import React, {Component} from "react";
import "../styles/comingSoon/subscribe.css";


class Subscribe extends Component {
    
    state = {
        email: ""
    }

    handleChange= e => {
        this.setState({email: e.target.value.trim()})
        // .trim is for any spaces that are not needed
        // this is for updating the state as email is inputted
    }

    handleSubmit = e => {
        e.preventDefault();
        // prevents the default sequence of refreshing page on the submit
        if (this.state.email) {
            console.log(this.state.email)
            fetch(`/sendemail?email=${this.state.email}`, {
                method:'POST'
            })
            //  .then(res=>res.json())
            //  .then(res=> console.log(res))
            //  .then(err=>console.log(err))
             .then((res) => {
                 console.log(res);
                 // success
                 console.log("success")
             }).catch((err) => {
                 // error 
                 alert(err)
             })
        }
    }
    
    render() {
        // want what the button and placeholder says to be fully customizeable so we use props 
        const {placeholder, buttonText} = this.props
        return (
            <form className="subscribe" onSubmit={this.handleSubmit}>
                {/* onSubmit handles the submit that is done by the button */}
                <input className="subscribe-email"
                name="email"
                type="email"
                placeholder = {placeholder}
                onChange={this.handleChange}
                value={this.state.email}
                // as the user inputs anything, letter by letter this will track the changes
                ></input>
                {/* type is for checkin it is an email */}
                <button className="subscribe-button" type="submit">{buttonText}</button>
                {/* by specifying the button as a submit button to submit the form*/}

            </form>
        )
    }
}

export default Subscribe