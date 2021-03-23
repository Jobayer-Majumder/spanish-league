import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
                <a className="navbar-brand" href="/home">Sports Lens</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link active" href="/home">Home </a>
                        <a className="nav-link" href="/home">Teams</a>
                        <a className="nav-link" href="/home">About</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;