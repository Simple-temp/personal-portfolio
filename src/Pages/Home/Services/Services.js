import React, { useEffect, useRef, useState } from 'react';
import ServicesInfo from '../ServicesInfo/ServicesInfo';
import w1 from "../../../img/w1.png";
import w2 from "../../../img/w2.png";
import w3 from "../../../img/w3.png";
import w4 from "../../../img/w4.png";
import w5 from "../../../img/w5.png";
import w6 from "../../../img/w6.png";
import w7 from "../../../img/w7.png";
import Isotope from "isotope-layout";
import "./Services.css"

const Services = () => {

    const services = [
        {
            logo: w1,
            title: "Creative Agency",
            filter: "filter-item mern",
            icon: <i class="fa-brands fa-github"></i>,
            client: "https://github.com/Simple-temp/agency-react-client",
            server: "https://github.com/Simple-temp/agency-node-server",
            url: "https://agency-656a8.web.app/",
            clienttext: "Front-end code",
            servertext: "Back-end code",
        },
        {
            logo: w4,
            title: "Mern todo-list",
            filter: "filter-item crud",
            icon: <i class="fa-brands fa-github"></i>,
            client: "https://github.com/Simple-temp/react-todo-client",
            server: "https://github.com/Simple-temp/node-todo-server",
            url: "https://todo-list-009.netlify.app/",
            clienttext: "Front-end code",
            servertext: "Back-end code",
        },
        {
            logo: w2,
            title: "Aircnc Website",
            filter: "filter-item mern",
            icon: <i class="fa-brands fa-github"></i>,
            client: "https://github.com/Simple-temp/react-aircnc-client",
            server: "https://github.com/Simple-temp/node-aircnc-server",
            url: "https://aircnc-bf96b.web.app/",
            clienttext: "Front-end code",
            servertext: "Back-end code",
        },
        {
            logo: w5,
            title: "Crud operation",
            filter: "filter-item crud",
            icon: <i class="fa-brands fa-github"></i>,
            client: "https://github.com/Simple-temp/react-crud-client",
            server: "https://github.com/Simple-temp/node-crud-server",
            url: "https://crud-operation-1171d.web.app/",
            clienttext: "Front-end code",
            servertext: "Back-end code",
        },
        {
            logo: w6,
            title: "React Chat-engine",
            filter: "filter-item smsapp",
            icon: <i class="fa-brands fa-github"></i>,
            client: "https://github.com/Simple-temp/react-chat-engine",
            url: "https://unichat-app-af82b.web.app/",
            clienttext: "Front-end code",
            servertext: "No back end",
        },
        {
            logo: w3,
            title: "Gym Website",
            filter: "filter-item mern",
            icon: <i class="fa-brands fa-github"></i>,
            client: "https://github.com/Simple-temp/react-gym-client",
            server: "https://github.com/Simple-temp/node-gym-server",
            url: "https://gymwebsite-3a05f.web.app/",
            clienttext: "Front-end code",
            servertext: "Back-end code",
        },
        {
            logo: w7,
            title: "React & Firebase chat app",
            filter: "filter-item smsapp",
            icon: <i class="fa-brands fa-github"></i>,
            client: "https://github.com/Simple-temp/message-app",
            url: "https://chat-app-e42cd.web.app/login",
            clienttext: "Front-end code",
            servertext: "No back end",
        },
    ]

    const isotope = useRef()

    const [filterKey, setFilterKey] = useState('*')

    useEffect(() => {
        isotope.current = new Isotope('.filter-container', {
            itemSelector: '.filter-item',
            layoutMode: 'fitRows',
        })
        return () => isotope.current.destroy()
    }, [])
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
                    <h2 className='text-center'>My Mern Project</h2>
                </div>
                <div className="container inner-container isotope-control mt-5">
                    <ul className="control-ul">
                        <li onClick={handleFilterKeyChange('*')}>Show-all</li>
                        <li onClick={handleFilterKeyChange('mern')}>Mern-project</li>
                        <li onClick={handleFilterKeyChange('crud')}>Crud-project</li>
                        <li onClick={handleFilterKeyChange('smsapp')}>Message app</li>
                    </ul>
                    <div className="row">
                        <div className='filter-container'>
                            {
                                services.map(service => <ServicesInfo ser={service} handleFilterKeyChange={handleFilterKeyChange}></ServicesInfo>)
                            }
                        </div>
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