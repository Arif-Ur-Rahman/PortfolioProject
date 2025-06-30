import React from 'react'
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Info = () => {

    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    AOS.refresh()
  }, []);
  return (
    <div className="about__info grid">
        <div className="about__box" data-aos="fade-up">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1 years working</span>
        </div>

        <div className="about__box" data-aos="zoom-in" >
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">30+ projects</span>
        </div>

        <div className="about__box" data-aos="fade-up">
            <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">24/7 Online</span>
        </div>
    </div>
  )
}

export default Info