import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogDetails/DogDetails.css';


export default class DogDetails extends Component {

    render() {
        const { dog } = this.props;
        return (
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-11 col-lg-5">
                        <div className="Dog-card card mx-auto shadow-lg">
                            <img src={dog.src} alt={dog.alt} className="card-img-top" />
                            <div className="card-body">
                                <h3>{dog.name}</h3>
                                <h5 className="text-muted">{dog.age} years old.</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                {dog.facts.map((fact, i) =>
                                    <li className="list-group-item" key={i}>
                                        {fact}
                                    </li>
                                )}
                            </ul>
                            <div className="card-body">
                                <Link to="/dogs" className="btn btn-outline-dark btn-outline">👈🏻Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
