import React from 'react';
import ServicesInfo from '../ServicesInfo/ServicesInfo';
import w1 from "../../../img/w1.png"

const Services = () => {

    const services = [
        {
            logo : w1,
            title : "Creative Agency",
        },
        {
            logo : w1,
            title : "Gym Website",
        },
        {
            logo : w1,
            title : "Aircnc Website",
        },
        {
            logo : w1,
            title : "What's Application",
        }
    ]

    return (
        <section>
            <div className="container mt-1 py-5" id="mywork">
                <div className="row">
                    <h2 className='text-center'>My best project</h2>
                </div>
                <div className="container inner-container  mt-5">
                    <div className="row">
                        {
                            services.map( service => <ServicesInfo ser={service}></ServicesInfo>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

/*
This is a dynamic wedsite .The most popular js library React is used. This fully responsive website front-end and back-end. the back-end I use node js, express js and mongodb
 */