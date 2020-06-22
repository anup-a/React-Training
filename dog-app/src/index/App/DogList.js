import React, { Component } from 'react';
import './DogList/dogList.css';
import { Link } from 'react-router-dom'

export default class DogList extends Component {
    render() {
        return (
            <div>
                <div className="heading-text text-center">DOGS LIST</div>
                <div className="dogs-container mt-5">
                    <div className="container">
                        <div className="row">
                            {this.props.dogs.map(dog =>
                                <div className="Dog col-md-4 text-center" key={dog.name}>
                                    <img src={dog.src} alt={dog.name} />
                                    <hr className="dog-underline" />
                                    <Link className="dog-name" to={`/dogs/${dog.name}`}>{dog.name}</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
