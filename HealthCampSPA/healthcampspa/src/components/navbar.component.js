import React from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Health Camp SPA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="./Demographocs">Demographocs </Link>
                        <Link className="nav-item nav-link" to="./HealthVitals">Health Vitals</Link>
                        <Link className="nav-item nav-link" to="./Reports">Reports</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

