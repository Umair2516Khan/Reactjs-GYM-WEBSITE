import React from 'react'
import './Reasons.css';
import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/image3.png';
import img4 from '../../assets/image4.png';
import tick from '../../assets/tick.png';
import nike from '../../assets/nike.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';

const Reason = () => {
  return (
    <div className='reasons' id='Reasons'>
      <div className='leftR'>
        <img src={img1} alt="" className='img1'/>
        <img src={img2} alt="" className='img2'/>
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <div className='rightR'>
        <span>SOME REASONS</span>
        <div>
          <span className='stroke_text'>why</span>
          <span> choose us?</span>
        </div>
        <div className="details">
          <div className='detail_card'>
            <img src={tick} alt="" className='tick_image'/>
            <span className='details_span'>OVER 150+ EXPERT COACHES</span>
          </div>
          <div className='detail_card'>
          <img src={tick} alt="" className='tick_image'/>
            <span className='details_span'>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div className='detail_card'>
          <img src={tick} alt="" className='tick_image'/>
            <span className='details_span'>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div className='detail_card'>
          <img src={tick} alt="" className='tick_image'/>
            <span className='details_span'>RELIABLE PARTNERS</span>
          </div>
        </div>
        <div className="details_end">
          <span>our partners</span>
          <div className='partners_images'>
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reason