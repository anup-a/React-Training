import React, { Component } from 'react'
import ColorBox from './ColorBox'

import Navbar from './Navbar';
import './Palette.css';


export default class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
        this.handleChangeLevel = this.handleChangeLevel.bind(this);
    }

    handleChangeLevel(newLevel) {
        this.setState({ level: newLevel })
    }

    render() {
        const { palette } = this.props;
        const { level } = this.state;
        console.log(palette.colors)
        const colorBoxes = palette.colors[level].map(color => <ColorBox color={color.hex} name={color.name} />)
        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.handleChangeLevel} />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
