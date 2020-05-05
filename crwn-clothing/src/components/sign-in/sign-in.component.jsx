import React from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component{
    
     constructor(props){
          super(props);

          this.state = {
               email: "",
               password: ""
          }
     }

     /*
     *  Submit function that calls our method handleSubmit which for now will simply prevent the default submit action
     *  from firing because we want full control over exactly what this summit is going to do.
     * */
     handleSubmit = async event =>{
          event.preventDefault();
          
          const { email, password } = this.state;
          
          try{
              
              await auth.signInWithEmailAndPassword(email, password);
    
              this.setState({email: "", password: ""})
              
          }catch (error) {
              console.log(error)
          }
     };

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

       this.setState({[name]: value});
     };


     render() {
          return(
               <div className="sign-in">
                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit} >
                         <FormInput name={"email"} type={"email"} label={"email"} value={this.state.email} handleChange={this.handleChange}/>
                         
                         <FormInput name={"password"} type={"password"} label={"password"} value={this.state.password} handleChange={this.handleChange}/>

                         <div className={"buttons"}>
                              <CustomButton type={"submit"}>Sing in</CustomButton>
                              <CustomButton type={"button"} onClick={signInWithGoogle} isGoogleSignIn >{' '}Sing in with Google{' '}</CustomButton>
                         </div>
                    </form>
               </div>
          )
     }
}

export default SignIn;