import React from 'react';
import "./ServicesInfo.css";

const ServicesInfo = ({ ser, handleFilterKeyChange }) => {
    const { logo, des, title, filter, client, server, icon, url, clienttext, servertext } = ser
    return (
        <div className={`col-lg-4 col-md-6 col-12 ${filter}`} onClick={() => handleFilterKeyChange()}>
            <div className="s-box">
                <div className="s-box-header">
                    <img src={logo} className="img-fluid w-100" alt="" />
                </div>
                <div className="s-box-body mt-4">
                    <h5>{title}</h5>
                    <p>{des}</p>
                </div>
                <div className="s-box-footer mb-3">
                    <a href={client}>{icon}{clienttext}</a>
                    <a href={server}>{icon}{servertext}</a>
                </div>
                <a href={url} className='live-btn' target="_blank"><i class="fa-solid fa-satellite-dish"></i>Live link</a>
            </div>
        </div>
    );
};

export default ServicesInfo;