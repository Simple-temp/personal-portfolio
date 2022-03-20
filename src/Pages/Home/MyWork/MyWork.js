import React from 'react';
import "./MyWork.css"

const MyWork = ({info}) => {
    return (
        <div className='col-lg-4 col-md-6 col-12'>
            <div className="blog">
                <div className="blog-head">
                    <img src={info.img} className="d-block w-100" style={{height:"230px"}} alt="" />
                </div>
                <div className="blog-body">
                    <h5 className='py-2'>{info.title}</h5>
                    <a className='custom-btn' href={info.url} target="_blank" >{info.icon}</a>
                </div>
            </div>
        </div>
    );
};

export default MyWork;