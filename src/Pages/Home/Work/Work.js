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
            title : "REACT",
            url : "https://github.com/Simple-temp/react",
            icon : <i class="fa-brands fa-github"></i>,
        },
        {
            img : js,
            title : "JS",
            url : "https://github.com/Simple-temp/js",
            icon : <i class="fa-brands fa-github"></i>,
        },
        {
            img : html,
            title : "HTML",
            url : "https://github.com/Simple-temp/html",
            icon : <i class="fa-brands fa-github"></i>,
        },
        {
            img : css,
            title : "CSS",
            url : "https://github.com/Simple-temp/css",
            icon : <i class="fa-brands fa-github"></i>,
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