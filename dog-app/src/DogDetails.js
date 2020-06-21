import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class DogDetails extends Component {

    render() {
        const { dog } = this.props;
        return (
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-11 col-lg-5">
                        <div className="card">
                            <img src={dog.src} alt={dog.alt} className="card-img-top" />
                            <div className="card-body">
                                <h2>{dog.name}</h2>
                                <h4 className="text-muted">{dog.age} years old.</h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                {dog.facts.map((fact, i) =>
                                    <li className="list-group-item" key={i}>
                                        {fact}
                                    </li>
                                )}
                            </ul>
                            <div className="card-body">
                                <Link to="/dogs" className="btn btn-info">Go Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
