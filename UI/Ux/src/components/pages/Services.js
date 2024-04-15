import React from 'react';
import '../../App.css';

import Newcards from '../Newcard';
// import Navbar from '../Navbar';
import ServiceBookingForm from '../forms/ServiceBookingForm';
// import axios from '../../Connection/axios';

 function Services() {
  

  return<> 
  {/* <Navbar /> */}
  <h1 className='services'>SERVICES</h1>
  
  <Newcards/>
  <ServiceBookingForm/>

  </>
}
export default Services;