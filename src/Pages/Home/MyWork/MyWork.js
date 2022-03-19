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
                    <button className='custom-btn'>see blog</button>
                </div>
            </div>
        </div>
    );
};

export default MyWork;