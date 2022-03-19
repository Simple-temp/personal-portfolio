import React from 'react';
import "./Header.css"
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header>
            <div className="container inner-container" id="home">
                {/* <Navbar></Navbar> */}
                <Main></Main>
            </div>
        </header>
    );
};

export default Header;