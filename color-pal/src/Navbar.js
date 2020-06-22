import React, { Component } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <a href="#">
                        <span role="img">🎨</span>
                    </a>
                </div>
                <div className="slider-container">
                    <span className="level-name">Level : {this.props.level}</span>
                    <div className="slider">
                        <Slider min={100} max={900} step={100} defaultValue={this.props.level} onChange={this.props.changeLevel} />
                    </div>
                </div>
            </nav>
        )
    }
}
