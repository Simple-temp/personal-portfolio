import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='contact'>
            <div className="container mb-4 pb-4 w-75 mx-auto" id="contact">
                <h2 className='text-white mb-5'>Contact</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-3 col-sm-12">
                        <ul className='text-white'>
                            <li><i class="fab fa-facebook"></i><a href="https://www.facebook.com/profile.php?id=100009176198170">Facebook</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <ul className='text-white'>
                            <li><i class="fas fa-phone"></i><a href="/">01409-447002</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-12">
                        <ul className='text-white'>
                            <li><i class="fas fa-envelope-square"></i><a href="/">mdaziz227500@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-center text-white mt-4'> Copyright by Aziz || {(new Date().getFullYear())} All right reserved </p>
        </footer>
    );
};

export default Footer;