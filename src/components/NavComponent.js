import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/index.html'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/about.html'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/post.html'>Sample Post</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact.html'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavComponent;