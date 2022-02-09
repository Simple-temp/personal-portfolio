import React from 'react';
import "./Main.css"
import person from "../../../img/p1.jpg"
import { Typewriter } from 'react-simple-typewriter'



const Main = () => {
    return (
        <div className='container mt-5 py-5 main w-75 mx-auto'>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 img">
                    <img src={person} alt="" className='img-fluid' />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                    <div className="main-box">
                        <h4>Hello <br />I am <span>
                            <Typewriter
                                words={['Aziz..','A Web Developer', 'A Web Desinger', 'A Front-End Developer']}
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span></h4>
                        <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quod cum beatae corrupti, itaque dolor.</p>
                        <button className='custom-btn'>Hire me!</button><button className='custom-btn but'>Explore Expreience</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;