// import React from 'react'
import  './LoginSignup.css'
import user from '../Assets/icons8-person-30.png'
import password from '../Assets/icons8-password-50.png'
import email from '../Assets/icons8-email-50.png'
import React, { useState } from 'react';



export default function LoginSignup() {
    const [action,setAction] = useState();
  return (
    <div className='container'>
        <div className='header'>
            <div className="text">{action}</div>
                <div className="underline"></div>
                </div>
                    <div className="inputs">
                         {action==="Login"?<div></div>:
                          <div className="input">
                          <img src = {user} alt = "input name" />
                          <input type="text" placeholder='Enter Your Name'/>
                      </div>}
                       
                        <div className="input">
                            <img src = {email} alt = "user email" />
                            <input type="email" placeholder='Enter Your Email'/>
                        </div>
                        <div className="input">
                            <img src = {password} alt = "user passowrd" />
                            <input type="password"  placeholder='Enter Your password'/>
                        </div>
                    </div>
                    {action === "Sign Up"?<div></div>:
                    <div className="forgot-password">Lost Password? <span>Click here</span></div>
                    }
                    
                    <div className="submit-container">
                        <div className={action === "Login"?"submit gray": "submit"} onClick={()=>{setAction("Sign up")}}>Sign Up</div>
                        <div className={action === "Sign Up"?"submit gray": "submit"} onClick={() =>{setAction("Login")}}>Login</div>
                    </div>
                
            
        
    </div>

  )
}
