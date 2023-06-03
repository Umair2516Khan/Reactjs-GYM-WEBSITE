import React from 'react'
import { useState } from 'react'
import { testimonialsData } from '../../data/testimonialsData'
import './Testimonials.css'
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';

const Testimonials = () => {
  //we could also use testimonialsData.length (not .length()) to get the size
  var length_of_dataArray=0;
  testimonialsData.forEach(()=>{
    length_of_dataArray++;
  })
  // console.log(length_of_dataArray);
  const [selected,setselected]=useState(0);
  const forward = ()=>{
     if(selected===length_of_dataArray-1)
     {
      console.log("INSIDE IF ");
       setselected(0);
    }
    else{
   setselected(selected+1);
    }
  }
  const backward = ()=>{
    if(selected===0){
      setselected(length_of_dataArray-1);
    }
    else{
    setselected(selected-1);
    }
  }
  return (
    <div className='Testimonials'>
      <div className="LeftT">
        <span>TESTIMONIALS</span>
        <span className="stroke_text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span>{testimonialsData[selected].review}</span>
        <div className='about_user'>
          <span>{testimonialsData[selected].name}  </span>
          -
          <span>  {testimonialsData[selected].status}</span>
        </div>
      </div>

      <div className="RightT">
        <div className='user_image'>
          <div></div>
          <div></div>
          <img src={testimonialsData[selected].image} alt="" />
        </div>
      <div className="arrows">
         <img src={leftArrow} alt="" onClick={backward}/>
          <img src={rightArrow} alt="" onClick={forward}/>
         </div>
      </div>
    </div>
  ) 
}

export default Testimonials