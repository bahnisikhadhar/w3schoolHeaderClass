import { Component } from "react";
import "./Header.css";
import LoginClass from "./LoginClass";


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            logout: false
        }
    }

    loginClick = () => {
        this.setState({
            login: false
        })
    }
    logOutClick = () => {
        this.setState({
            logout: true
        })

        document.querySelector('.logout').style.display = "none";
    }
    render() {
        return (
            <>
                {
                    (this.state.login) ?  (

                        <div className="header">
                            <div className="left_navbar">
                                <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png" style={{ height: '55px', margin: '12px' }} alt="" /></div>
                                <button className="btn">Tutorials<i className="fa fa-caret-down" aria-hidden="true"></i></button>
                                <button className="btn" >References<i className="fa fa-caret-down" aria-hidden="true"></i></button>
                                <button className="btn" >Exercises<i className="fa fa-caret-down" aria-hidden="true"></i></button>
                                <button className="btn" >Sign up</button>
                            </div>
                            <div className="right_navbar">
                                <i className="fa fa-adjust" aria-hidden="true"></i>
                                <i className="fa fa-globe" aria-hidden="true"></i>
                                <i className="fa fa-search" aria-hidden="true"></i>
                                <p className="pro right_btn">Pro</p>
                                <p className="certified right_btn">Get Certified</p>
                                <p className="create right_btn">Create Website</p>
                                {
                                    (!this.props.email) ?
                                        <p className="login right_btn" onClick={this.loginClick} >Log in</p> : <p className="logout right_btn" onClick={this.logOutClick} >Log Out</p>

                                }
                                {
                                    (this.state.logout) ?
                                        <p className="login right_btn" onClick={this.loginClick}>Log in</p> : ""

                                }

                            </div>
                        </div>
                    ):
                    (<LoginClass />) 
                    }
            </>
        )
    }
}