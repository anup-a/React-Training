import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/dogs" className="navbar-brand shadow-lg">🐶</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbar">
                    <ul className="navbar-nav">
                        {this.props.dogs.map((dog, i) =>
                            <li className="nav-item" ><NavLink className="nav-link" to={`/dogs/${dog.name}`}>{dog.name}</NavLink></li>
                        )}
                    </ul>
                </div>
            </nav>
        )
    }
}
