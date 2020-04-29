import React from "react"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss"

class SignUp extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			email: "",
			password: ""
		}
	}
	
	/*
	*  handleChange (OnChange) function which also again takes an event except for this were going to pull both the value and the name
	*  off of our event dot target the event target will end up being our input element itself and we want the name value
	*  that we just set as well as the actual value on that target that they've just typed in and whats we're going to do
	*  is dynamically ser our state so that it sets that name.
	*
	*  So it'll render whatever that value that comes in will be if name is password. It will say password and that point
	*  to the value that they typed in and then the same will apply for email if it's the email then this event targets
	*  dot name will be email and then the value will what they're typing in there.
	* */
	handleChange = event =>{
		const {value, name} = event.target;
		
		this.setState( {[name]: value} );
	};
	
	render() {
		return (
			<div className="sign-up">
				
				
				<form action="">
					<FormInput name="email" type="email" label={"email"} value={this.state.email} handleChange={this.handleChange}/>
					
					<FormInput name={"password"} type={"password"} label={"password"} valeu={this.state.password} handleChange={this.handleChange}/>
					
					<CustomButton type={"submit"}>Sing up</CustomButton>
				</form>
				
			</div>
		);
	}
}

export default SignUp;