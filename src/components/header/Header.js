import React from 'react';
import bg from '../../images/bg-1.png';

const style = {
    background : `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: '250px'
}

const Header = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={style}>
            <h1>Sports Lens</h1>
        </div>
    );
};

export default Header;