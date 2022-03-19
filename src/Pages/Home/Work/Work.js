import React from 'react';
import MyWork from '../MyWork/MyWork';
import html from "../../../img/html.jpg"
import css from "../../../img/css.jpg"
import react from "../../../img/react.png"
import js from "../../../img/js.png"

const Work = () => {

    const blog = [
        {
            img : react,
            title : "REACT"
        },
        {
            img : js,
            title : "JS"
        },
        {
            img : html,
            title : "HTML"
        },
        {
            img : css,
            title : "CSS"
        },
    ]

    return (
        <section className='pb-4'>
            <div className="container mt-5 py-1" id="blog">
                <div className="row">
                    <h2 className='text-center'>Blog</h2>
                </div>
            </div>
            <div className="container inner-container mt-5">
                <div className="row">
                    {
                        blog.map( info => <MyWork info={info}></MyWork>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Work;