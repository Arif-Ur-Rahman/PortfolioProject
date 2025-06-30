import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title" data-aos="zoom-in">My<span className='ski'> S</span>kills</h2>
        <span className="section__subtitle">My technical expertise</span>

        <div className="skills__container container grid">
            <Frontend/>
            <Backend />
        </div>
    </section>
  )
}

export default Skills