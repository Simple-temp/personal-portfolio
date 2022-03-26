import React from 'react';
import "./Main.css"
import person from "../../../img/p1.jpg"
import { Typewriter } from 'react-simple-typewriter'
import resume from "../../../img/resume.pdf"


const Main = () => {
    return (
        <div className='container mt-5 py-5 main mx-auto'>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12 img">
                    <img src={person} alt="" className='img-fluid' style={{height:"400px",width:"auto"}} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                    <div className="main-box">
                        <h4>Hello <br />I am <span>
                            <Typewriter
                                words={['Aziz..','A Web Developer', 'A Web Desinger', 'A Front-End Developer']}
                                loop
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span></h4>
                        <p className='my-3 pb-2'>I am very exiting work with you and your company. My resume and my experience are below. I have done many mern-projects and also full-stack development</p>
                        <a href={resume} className='custom-btn' download="resume">download resume <i class="fa-solid fa-download"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;