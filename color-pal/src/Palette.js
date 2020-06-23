import React, { Component } from 'react'
import ColorBox from './ColorBox'

import Navbar from './Navbar';
import './Palette.css';


export default class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            colorFormat: "hex"
        }
        this.handleChangeLevel = this.handleChangeLevel.bind(this);
        this.handleChangeFormat = this.handleChangeFormat.bind(this);
    }

    handleChangeLevel(newLevel) {
        this.setState({ level: newLevel })
    }

    handleChangeFormat(val) {
        this.setState({
            colorFormat: val
        })
    }

    render() {
        const { palette } = this.props;
        const { level, colorFormat } = this.state;
        console.log(palette)
        const colorBoxes = palette.colors[level].map(color => <ColorBox color={color[colorFormat]} name={color.name} />)
        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.handleChangeLevel} colorFormat={colorFormat} changeFormat={this.handleChangeFormat} />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <footer className="footer-section">
                    {palette.paletteName}
                    <span>
                        {palette.emoji}
                    </span>
                </footer>
            </div>
        )
    }
}
