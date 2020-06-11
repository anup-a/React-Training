import React, { Component } from 'react'
import jokes from './jokes.png';

import Axios from 'axios';
import Joke from './joke';

export default class JokesList extends Component {
    static defaultProps = {
        numJokes: 10
    }
    constructor(props) {
        super(props)
        this.state = {
            jokes: []
        }
        this.handleVote = this.handleVote.bind(this);
    }
    async componentWillMount() {
        let jokes = [];
        while (jokes.length < this.props.numJokes + 1) {
            let randomJoke = await Axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } });
            const joke = randomJoke.data.joke;
            const jokeId = randomJoke.data.id;

            jokes.push({ joke: joke, id: jokeId, votes: 0 });
        }
        this.setState({ jokes: jokes });
    }

    handleVote(id, delta) {
        this.setState(
            st => ({
                jokes: st.jokes.map(j =>
                    (j.id === id && j.votes < 15) ? { ...j, votes: j.votes + delta } : j)
            })
        )
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
                    {this.state.jokes.map(j => <Joke
                        key={j.id}
                        text={j.joke}
                        votes={j.votes}
                        upvote={() => this.handleVote(j.id, 1)}
                        downvote={() => this.handleVote(j.id, -1)}
                    />)}

                </div>
            </div>
        )
    }
}
