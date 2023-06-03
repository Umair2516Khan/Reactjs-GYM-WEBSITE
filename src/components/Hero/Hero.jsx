import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero3_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';

const Hero = () => {
  return (
    <div className='hero'>
        {/* LEFT SIDE OF HERO SECTION */}
        <div className='hero_left'>
        <Header />
        {/* THE BEST GYM IN THE TOWN  */}
        <div className="ad">
            <span> The Best Gym In The Town</span>
            <div></div>                
            </div>
            {/* HERO HEADING */}
            <div className="hero_heading">
            <div className='heading1'>
                <span className='stroke_text'>SHAPE</span>
                <span>YOUR</span>
            </div>
            <div className='heading2'>
                <span>IDEAL</span>
                <span>BODY</span>
            </div>
            <div className='slogan'>
                <span >WORKOUT YOUR WAY TO YOUR BEST FORM WITH US.. BECAUSE THE ONLY BAD WORKOUT IS NO WORKOUT</span>
            </div>
            </div>
            {/* GYM FIGURES AND STATISTICS */}
            <div className="stats">
                <div>
                    <span>+ 150</span>
                    <span>Expert Trainers</span>
                </div>
                <div>
                <span>+ 1000</span>
                    <span>Members Joined</span>
                </div>
                <div>
                <span>+ 40</span>
                    <span>Fitness Programs</span>
                </div>
            </div>
            {/* HERO BUTTONS */}
            <div className="hero_buttons">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>
        {/* RIGHT SIDE OF HERO SECTION */}
        <div className='hero_right'>
            <button className='btn'>Join Now</button>
            <div className="heart_rate">
                <img src={heart} alt="heart emoji" />
                <span>Heart Rate</span>
                <span>120 bpm</span>
            </div>
            {/* HERO IMAGES */}
            <img src={hero_image} alt="" className="hero_image" />
            <img src={hero_image_back} alt="" className="hero_image_back" />
            {/* CALORIES */}
            <div className="calories">
                <img src={calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>240 KCAL</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero