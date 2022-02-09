import React from 'react';
import "./About.css"
import ProgressBar from "@ramonak/react-progress-bar";
import person from "../../../img/p1.jpg"
import { Typewriter } from 'react-simple-typewriter'


const About = () => {
    return (
        <section>
            <div className="container inner-container mt-1 py-5" id="about">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 about">
                        <img src={person} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="about-box">
                            <div className="about-info">
                                <h2>About me</h2>
                                <small>
                                    Become <span>
                                        <Typewriter
                                            words={['A React Developer', 'A Web Developer']}
                                            loop
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </small>
                                <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta magni perspiciatis veniam dolores ratione consequuntur mollitia itaque distinctio atque corporis.</p>
                            </div>
                            <div className="p-bar">
                                <label>React Js</label>
                                <ProgressBar completed={70} labelColor="#fff" className='orange-progress-bar' />
                            </div>
                            <div className="p-bar">
                                <label>Vanilla Js</label>
                                <ProgressBar completed={62} labelColor="#fff" className='orange-progress-bar' />
                            </div>
                            <div className="p-bar">
                                <label>Node Crud and express</label>
                                <ProgressBar completed={85} labelColor="#fff" className='orange-progress-bar' />
                            </div>
                            <div className="p-bar">
                                <label>MongoDb</label>
                                <ProgressBar completed={50} labelColor="#fff" className='orange-progress-bar' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;