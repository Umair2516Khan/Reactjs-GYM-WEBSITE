import React from 'react'
import './Footer.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import  logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='line'></div>
            <div className='footer_container'>
                <div className='first'>
                    <img src={github} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                </div>
                <div className='second'>
                    <img src={logo} alt="" />
                </div>
            </div>
    </div>
  )
}

export default Footer