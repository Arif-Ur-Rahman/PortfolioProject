import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content" data-aos="fade-up">
        <h3 className="skills__title">Frontend Developer </h3> 

        <div className="skills__box">
            <div className="skills__group" data-aos="fade-right" data-aos-delay="200">
                <div className="skills__data">
                    <i className="bx bxl-html5"></i>

                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className='skills__level'>Advance</span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <i className="bx bxl-css3"></i>

                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className='skills__level'>Intermidiate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-javascript"></i>

                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className='skills__level'>Intermidiate</span>
                    </div>
                </div>


            </div>

            <div className="skills__group" data-aos="fade-left" data-aos-delay="300">
                <div className="skills__data">
                    <i className="bx bxl-react"></i>

                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className='skills__level'>Intermidiate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-tailwind-css"></i>

                    <div>
                        <h3 className="skills__name">TailwindCSS</h3>
                        <span className='skills__level'>Intermidiate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-git"></i>

                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className='skills__level'>Intermidiate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend