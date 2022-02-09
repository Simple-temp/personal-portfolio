import React from 'react';
import "./ServicesInfo.css";

const ServicesInfo = ({ser}) => {
    const {logo,des,title} = ser
    return (
        <div className='col-lg-4 col-md-6 col-12'>
            <div className="s-box">
                <div className="s-box-header">
                    <img src={logo} className="img-fluid" alt="" />
                </div>
                <div className="s-box-body mt-4">
                    <h5>{title}</h5>
                    <p>{des}</p>
                </div>
                <button className='custom-btn'>see the project</button>
            </div>
        </div>
    );
};

export default ServicesInfo;