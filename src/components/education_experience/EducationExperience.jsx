import React from 'react'
import "./education.css"

const Education = () => {
  return (
       <section className="ee-section">
      <h2 className="ee-title">Education & Experience</h2>

      <div className="ee-container">
        {/* Education Section */}
        <div className="ee-education">
          <h3 className="ee-subtitle">Education</h3>
          <div className="ee-box">
            <span className='education-title'>IUBAT - International University Of Business Agriculture & Technology</span>
            <p>BSc. Computer Science & Engineering</p> <span>2020-2024</span>

          </div>
          <div className="ee-box">
            <span className='education-title'>Cumilla Shikkhaboard Govt. Model College</span>
            <p>HSC - Science</p> <span>2016-2018</span>
          </div>
        </div>

        {/* Experience Section */}
        <div className="ee-experience">
          <h3 className="ee-subtitle">Experience</h3>
          <div className="experince_details">
             <span className='experiance-title'>Dream Diver NL</span>
            <p>Web App Developer</p> <span>2025 - present</span>
          </div>
          <div className="experince_details">
            <span className='experiance-title'>Dream Diver NL</span>
            <p>UI/UX Designer</p> <span>2024 - present</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education