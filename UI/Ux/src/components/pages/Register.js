import React, { useState } from 'react';
import '../../App.css';

import { Link } from 'react-router-dom'
import axios from '../../Connection/axios';


function Register() {
    const [userName,setUserName] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [userPassword,setUserPassword] = useState("");
    
    userNameHandler=(events)=>{
        setUserName(events.target.value);
    };

    userEmailHandler=(events)=>{
         setUserEmail(events.target.value);
    }
    
    userPasswordHandler=(events)=>{
        setUserPassword(events.target.value);
    }

    submitHandler=()=>{
        axios.post('/register',{
            userName,userEmail,userPassword
        }).then(response=>{
            return response
        }).catch(error=>{
            throw error;
        });
    }
  return <>
  {/* <Navbar /> */}
  <h1 className='Register'>Join Us</h1>;
       <div className="text-center m-5-auto">
            
            <form onSubmit={submitHandler}>
            {/* <h2>Join us</h2><br/> */}
            <h3>Create your Free account</h3><br/>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="name"  value={userName} onChange={userNameHandler} required  />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" value={userEmail} onChange={userEmailHandler} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={userPassword} onChange={userPasswordHandler} required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
       
</>
}

export default Register;
