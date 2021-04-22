import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light p-3">
                <Link className="navbar-brand fw-bold" to="/home" style={{color: '#EEA11D'}}>Sports Lens</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link text-secondary" to="/home">Home </Link>
                        <Link className="nav-link text-secondary" to="/home">Teams</Link>
                        <Link className="nav-link text-secondary" to="/home">About</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;