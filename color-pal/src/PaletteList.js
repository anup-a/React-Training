import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PaletteList.css';

export default class PaletteList extends Component {
    render() {
        return (
            <div className="PaletteList">
                {
                    this.props.palette.map(palette =>
                        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                    )
                }
            </div>
        )
    }
}
