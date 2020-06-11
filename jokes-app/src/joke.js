import React, { Component } from 'react';
import './joke.css';

export default class Joke extends Component {

    Colors = ['#e81109', '#e67a07', '#e6cc07', '#bde607', '#68e607', '#07e63f'];
    Emojis = ['😡', '😕', '😐', '😄', '😆', '😂', '🤣']
    constructor(props) {
        super(props)
        this.updateStyle = this.updateStyle.bind(this);
    }

    updateStyle() {
        const vote = this.props.votes;
        const newColorIndex = Math.floor(vote / 3) > 0 ? Math.floor(vote / 3) : 0;
        let newEmojiIndex;
        if (this.props.votes > 0) {
            newEmojiIndex = newColorIndex === 6 ? 7 : newColorIndex + 2;
        } else {
            newEmojiIndex = Math.floor(vote / 3) > -2 ? 1 : 0;
        }
        console.log(this.Colors[newColorIndex])
        return { color: this.Colors[newColorIndex], emoji: this.Emojis[newEmojiIndex] };
    }

    render() {
        return (
            <div className="joke">
                <div className="joke-buttons">
                    <div className="joke-upvote" onClick={this.props.upvote}><i className="ion-ios-gear vote-icons"></i><ion-icon class="vote-icons" name="thumbs-up-outline"></ion-icon></div>
                    <div className="joke-votes" style={{ borderColor: this.updateStyle().color }}>{this.props.votes}</div>
                    <div className="joke-downvote" onClick={this.props.downvote}><ion-icon class="vote-icons" name="thumbs-down-outline"></ion-icon></div>
                </div>
                <div className="joke-text">{this.props.text}</div>
                <div className="joke-emoji">{this.updateStyle().emoji}</div>
            </div>
        )
    }
}
