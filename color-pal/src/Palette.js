import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
// import './Palette.css';

const styles = {
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    PaletteColors: {
        height: "90%"
    },
    footerSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '6vh',
        letterSpacing: '2px',
        fontSize: '15px',
        fontWeight: '600',
        textTransform: 'uppercase',
        "& span": {
            margin: '0 1rem',
            fontSize: '20px',
        }
    }
}

class Palette extends Component {
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
        const { palette, classes } = this.props;
        const { level, colorFormat } = this.state;
        const colorBoxes = palette.colors[level].map(color => <ColorBox color={color[colorFormat]} paletteId={palette.id} colorId={color.id} name={color.name} key={color.name} showMoreButton />)
        return (
            <div className={classes.Palette}>
                <Navbar level={level} changeLevel={this.handleChangeLevel} colorFormat={colorFormat} changeFormat={this.handleChangeFormat} showLevelHandler />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                </div>
                <footer className={classes.footerSection}>
                    {palette.paletteName}
                    <span>
                        {palette.emoji}
                    </span>
                </footer>
            </div>
        )
    }
}

export default withStyles(styles)(Palette);