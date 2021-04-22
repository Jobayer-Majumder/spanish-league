import React from 'react';
import bg from '../../../images/bg-1.png';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Navbar from '../navbar/Navbar'

const style = {
    backgroundImage: `linear-gradient(to right, rgba(109, 179, 242, .6), rgba(109, 179, 242, .9)), url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '600px'
};

const Header = () => {
    return (
        <header  style={style}>
            <Navbar />
            <HeaderBanner />
        </header>

    );
};

export default Header;