import React from 'react'
import { SiMysql, SiExpress, SiApollographql } from 'react-icons/si';


const Backend = () => {

  return (
     <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bxl-nodejs"></i>

                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className='skills__level'>Basic</span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <SiExpress size={15} />

                    <div>
                        <h3 className="skills__name">Express.js</h3>
                        <span className='skills__level'>Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-mongodb"></i>

                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className='skills__level'>Basic</span>
                    </div>
                </div>

            </div>
            
            <div className="skills__group">
                <div className="skills__data">
                    <SiMysql size={16} />

                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className='skills__level'>Intermidiate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bxl-firebase"></i>

                    <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className='skills__level'>Intermidiate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <SiApollographql size={15}/>

                    <div>
                        <h3 className="skills__name">REST API</h3>
                        <span className='skills__level'>Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend