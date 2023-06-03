import React from 'react'
import { useRef } from 'react';
import './JoinNow.css';
import emailjs from '@emailjs/browser';
const JoinNow = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p6eub0r', 'template_ln2iw4n', form.current, 'RwzW_BEE86IiG1LUo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='join'>
    <div className='left'>
      <div className='first_line'>
        <span className='stroke_text'>READY TO</span>
        <span>LEVEL UP</span>
      </div>
      <div className='second_line'>
        <span>YOUR BODY</span>
        <span className='stroke_text'>WITH US?</span>
      </div>
      </div>
      <div className='right'>
        <form className="input" ref={form} onSubmit={sendEmail}>
        <input type="email" name='user_email' placeholder='Enter your Email Address here' />
        <button className='btn'>Join now</button>
        </form>
      </div>
    </div>
  )
}

export default JoinNow