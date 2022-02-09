import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='contact'>
            <div className="container" id="contact">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className='text-white'>Contact</h2>
                        <ul className='text-white'>
                            <li><i class="fab fa-facebook"></i><a href="/">Facebook</a></li>
                            <li><i class="fas fa-phone"></i><a href="/">01409447002</a></li>
                            <li><i class="fab fa-github"></i><a href="/">Github</a></li>
                            <li><i class="fab fa-linkedin"></i><a href="/">Linkedin</a></li>
                            <li><i class="fas fa-envelope-square"></i><a href="/">reingsroman042@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <form action="">
                            <input required name="name" type="text" placeholder='Name' className='w-100 field' />
                            <input required name="email" type="email" placeholder='Email' className='w-100 field' />
                            <textarea name="massege" cols="30" rows="10" placeholder='Massege' className='w-100 field'></textarea>
                            <input type="submit" value="Send" className='custom-btn mt-2' />
                        </form>
                    </div>
                </div>
            </div>
            <p className='text-center text-white mt-4'> Copyright by Aziz | {(new Date().getFullYear())} All right reserved </p>
        </footer>
    );
};

export default Footer;