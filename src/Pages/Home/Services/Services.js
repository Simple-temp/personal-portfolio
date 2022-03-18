import React, { useEffect, useRef, useState } from 'react';
import ServicesInfo from '../ServicesInfo/ServicesInfo';
import w1 from "../../../img/w1.png"
import Isotope from "isotope-layout";

const Services = () => {

    const services = [
        {
            logo: w1,
            title: "Creative Agency",
        },
        {
            logo: w1,
            title: "Gym Website",
        },
        {
            logo: w1,
            title: "Aircnc Website",
        },
        {
            logo: w1,
            title: "What's Application",
        }
    ]

    // init one ref to store the future isotope object
    const isotope = useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState('*')

    // initialize an Isotope object with configs
    useEffect(() => {
        isotope.current = new Isotope('.filter-container', {
            itemSelector: '.filter-item',
            layoutMode: 'fitRows',
        })
        // cleanup
        return () => isotope.current.destroy()
    }, [])

    // handling filter key change
    useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey])

    const handleFilterKeyChange = key => () => setFilterKey(key)
    
    return (
        <section>
            <div className="container mt-1 py-5" id="mywork">
                <div className="row">
                    <h2 className='text-center'>My best project</h2>
                </div>
                <div className="container inner-container  mt-5">
                    <div className="row">
                        {/* {
                            services.map( service => <ServicesInfo ser={service}></ServicesInfo>)
                        } */}
                        <ul>
                            <li onClick={handleFilterKeyChange('*')}>Show Both</li>
                            <li onClick={handleFilterKeyChange('vege')}>Show Veges</li>
                            <li onClick={handleFilterKeyChange('fruit')}>Show Fruits</li>
                        </ul>
                        <hr />
                        <ul className="filter-container">
                            <div className="filter-item vege">
                                <span>Cucumber</span>
                            </div>
                            <div className="filter-item fruit">
                                <span>Apple</span>
                            </div>
                            <div className="filter-item fruit">
                                <span>Orange</span>
                            </div>
                            <div className="filter-item fruit vege">
                                <span>Tomato</span>
                            </div>
                        </ul>
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