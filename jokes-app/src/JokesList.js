import React, { Component } from 'react'
import jokes from './jokes.png';

import Axios from 'axios';

export default class JokesList extends Component {
    static defaultProps = {
        numJokes: 10
    }
    constructor(props) {
        super(props)
        this.state = {
            jokes: []
        }
    }
    async componentWillMount() {
        let jokes = [];
        while (jokes.length < this.props.numJokes + 1) {
            let randomJoke = await Axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } });
            const joke = randomJoke.data.joke;
            const jokeId = randomJoke.data.id;

            jokes.push({ joke: joke, id: jokeId });
        }
        this.setState({ jokes: jokes });
    }

    render() {
        return (
            <div className="main-container">
                <div className="main-banner">
                    <div className="main-img">
                        <img src={jokes} alt="" height="300px" />
                    </div>
                    <p className="main-title">Dad Jokes</p>
                </div>
                <div className="jokes-container">
                    {this.state.jokes.map(j => <p key={j.id}>{j.joke}</p>)}

                </div>
            </div>
        )
    }
}
