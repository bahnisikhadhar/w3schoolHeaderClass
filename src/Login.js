import { useState } from "react";
import Mainpage from "./Mainpage";


export default function Login(){

  const  [email,setEmail] = useState("");
  const [isPresesent,setIsPresent] = useState(false);
  function handleMail(e){
    setEmail(e.target.value);
  }
    function handleClick(e){
      e.preventDefault();
      console.log(email);
       setIsPresent(true);
    }
    return (isPresesent)? <Mainpage email={email}/> : (
        <>
        <div className="login_box">
            <label>Enter your email:</label> <br />
            <input type="email" onChange={handleMail}/> <br /><br />
            <label>Enter Password</label> <br />
            <input type="password"/> <br /> <br />
            <input type="submit" className="btn" onClick={handleClick}/>
        </div>
        </>
    )
}