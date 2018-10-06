import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="main-nav d-flex flex-column flex-md-row align-items-center fixed-top">
            <h4 className="my-0 mr-md-auto font-weight-normal">Laravel - React Chat</h4>
            <nav className="my-2 my-md-0 mr-md-3 nav">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/about">
                    About
                </Link>
                <Link className="nav-link accent" to="/chat">
                    Chat
                </Link>
            </nav>
        </div>
    );
};

export default Navigation;
