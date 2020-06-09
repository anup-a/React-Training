import React, { Component } from 'react';
import './joke.css';

export default class Joke extends Component {
    render() {
        return (
            <div className="joke">
                <div className="joke-buttons">
                    <div className="joke-upvote" onClick={this.props.upvote}><i className="ion-ios-gear vote-icons"></i><ion-icon class="vote-icons" name="thumbs-up-outline"></ion-icon></div>
                    <div className="joke-votes">{this.props.votes}</div>
                    <div className="joke-downvote" onClick={this.props.downvote}><ion-icon class="vote-icons" name="thumbs-down-outline"></ion-icon></div>
                </div>
                <div className="joke-text">{this.props.text}</div>
            </div>
        )
    }
}
