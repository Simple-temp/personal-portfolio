import React from 'react';
import "./About.css"
import ProgressBar from "@ramonak/react-progress-bar";
import person from "../../../img/a1.jpg"
import { Typewriter } from 'react-simple-typewriter'


const About = () => {
    return (
        <section>
            <div className="container inner-container mt-1 py-5" id="about">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 ">
                        <div className="about-info">
                            <h2>About me</h2>
                            <small>
                                Become <span>
                                    <Typewriter
                                        words={['A React Developer', 'A Web Developer']}
                                        loop
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </small>
                            <p className='mt-2'>I am a Front-End Developer based on React . Actually I like React but I have worked with React as well as  Back-End Development. I have created many professional websites using front-end technology such as html, css, js, bootstrap, git & github and react. I have also done full-stack development using node js, node API server, express and mongodb.
                            <br />
                            <br />
                            The best practice are :-firebase-authentication, react-component, react-router, private-route, react-hooks, react-hook-form, map, crud-operation, regex, material-ui, searching and context-api.
                            <br /> 
                            <br />
                            Some technologys are use sometimes when need but they are familliar.
                            The familiar technologys are :-
                            firebase-store, firestore, jwt-token, google-map, redux, stripe, paypal, react-higher-order-components and react-native. 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="about-box">
                            <div className="p-bar">
                                <label>React Js</label>
                                <ProgressBar completed={79} labelColor="#fff" className='orange-progress-bar' />
                            </div>
                            <div className="p-bar">
                                <label>Leadership</label>
                                <ProgressBar completed={69} labelColor="#fff" className='orange-progress-bar' />
                            </div>
                            <div className="p-bar">
                                <label>Express</label>
                                <ProgressBar completed={65} labelColor="#fff" className='orange-progress-bar' />
                            </div>
                            <div className="p-bar">
                                <label>Mern-projects</label>
                                <ProgressBar completed={85} labelColor="#fff" className='orange-progress-bar' />
                            </div>
                            <div className="p-bar">
                                <label>MongoDb</label>
                                <ProgressBar completed={55} labelColor="#fff" className='orange-progress-bar' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;