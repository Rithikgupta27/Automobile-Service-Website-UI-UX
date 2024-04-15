import React, { useState } from 'react'
import axios from '../../Connection/axios'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const ServiceBookingForm = () => {
 const [userName,setUserName]= useState("")
 const [userMobileNo,setUserMobileNo]= useState()
 const [userEmail,setUserEmail]= useState("")
 const [userService,setUserService]= useState("")

const nameHandler=(events)=>{
      setUserName(events.target.value);
}

const mobileNumberHandler=(events)=>{
   setUserMobileNo(events.target.value);
}

const emailHandler=(events)=>{
  setUserEmail(events.target.value);
}

const serviceHandler=(events)=>{
  setUserService(events.target.value);
}

const submitHandler=()=>{
    const getService = () =>{
        axios.post('/service',{userName,userMobileNo,userEmail,userService})
        .then(resposne=>{
            return resposne;
            }).catch(error =>{
              throw error;
            });  }  
      }
  return (
    <div>
       <form action="/home" onSubmit={submitHandler}>
          <h3>Book For a Service</h3><br/>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="name" value={userName} onChange={nameHandler}  />
                </p>
                <p>
                    <label>Mobile no.</label><br/>
                    <input type="number" name="mobilerno" value={userMobileNo} onChange={mobileNumberHandler} required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" value={userEmail} onChange={emailHandler} required />
                </p>
                <p>
                    <label>Select service</label><br/>
                    <select name="cars" id="cars" onChange={serviceHandler}>
                         <optgroup label="Vehicle Wash">Vehicle Wash
                          <option value="ioc">inner and outer cleaning</option>
                         <option value="oc">Outer cleaning</option>
                         <option value="ic">Inner cleaning</option> 
                         </optgroup>
                         <optgroup label="Services">
                         <option value="mercedes">Oil Change</option>
                         <option value="audi">Engine Checkup</option>
                         <option value="audi">Full vehicle Service</option>
                         </optgroup>
                         </select>
                </p>
                
                {/* <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p> */}
                <p>
                    <button id="sub_btn" type="submit">Book</button>
                </p>
            </form>
            <footer>
                {/* <p><Link to="/">Back to Homepage</Link>.</p> */}
            </footer>
    </div>
  )
}

export default ServiceBookingForm;
