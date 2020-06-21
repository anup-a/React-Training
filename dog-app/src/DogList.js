import React, { Component } from 'react';
import './dogList.css';

export default class DogList extends Component {
    render() {
        return (
            <div>
                <div className="display-1 text-center">All the Dogs</div>
                <div className="dogs-container mt-5">
                    <div className="container">
                        <div className="row">
                            {this.props.dogs.map(dog =>
                                <div className="Dog col-md-4 text-center" key={dog.name}>
                                    <img src={dog.src} alt={dog.name} />
                                    <hr />
                                    <h4>{dog.name}</h4>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
