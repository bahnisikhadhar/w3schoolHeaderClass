import React, { Component } from "react";
import Header from "./Header";
// import MainpageClass from "./MainPageClass";
export default class LoginClass extends Component{
    constructor(){
        super();
        this.state = {
            email : "",
            isPresent: false
        }
    }
   handleMail= (e)=>{
        this.setState({email : e.target.value});
    }
    handleClick =(e)=>{
        e.preventDefault();
      console.log(this.state.email);
       this.setState({isPresent: !this.state.isPresent});
    }
        render(){
            return (
                <div>
                 {(!this.state.isPresent)?  (
                    <>
                    <h1>Login to enter in W3School</h1>
                <div className="login_box">
                    <label>Enter your email:</label> <br />
                    <input type="email" onChange={this.handleMail}/> <br /><br />
                    {/* Email: {this.state.email} */}
                    <label>Enter Password</label> <br />
                    <input type="password"/> <br /> <br />
                    <input type="submit" className="submit_btn" onClick={this.handleClick}/>
                </div>
                </> ): 
                (
                    <Header email = {this.state.email}/> 
                )}
                </div>
            )
        
    }
}