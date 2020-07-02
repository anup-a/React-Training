import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

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
    ColorBox: {
        width: "20%",
        height: "50%",
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        marginBottom: "-5px",
    },
    backButton: {
        position: 'absolute',
        height: 30,
        width: 60,
        top: '50%',
        left: '50%',
        marginLeft: '-30px',
        marginTop: '-15px',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        color: '#fff',
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

class ColorShadesPalette extends Component {

    constructor(props) {
        super(props);

        this.state = {
            colorFormat: "hex",
        }
        this._colorShades = this.getColorShades();
        this.handleChangeFormat = this.handleChangeFormat.bind(this);
    }

    handleChangeFormat(val) {
        this.setState({
            colorFormat: val
        })
    }

    getColorShades() {
        const colorId = this.props.colorId;
        const colors = this.props.palette.colors;
        let colorList = [];
        for (let colorShade in colors) {
            colorList.push(colors[colorShade].filter(color => color.id === colorId)[0]);
        }
        console.log(this.state.colorFormat);
        return colorList.slice(1);
    }

    render() {
        const { classes } = this.props;
        const { paletteName, emoji, id } = this.props.palette;
        const colorBoxes = this._colorShades.map(color => <ColorBox color={color[this.state.colorFormat]} name={color.name} key={color.name} showMoreButton={false} />);

        return (
            <div className={classes.Palette}>
                <Navbar colorFormat={this.state.colorFormat} changeFormat={this.handleChangeFormat} showLevelHandler={false} />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                    <Link to={`/palette/${id}`}>
                        <div className={classes.ColorBox} style={{ backgroundColor: 'black' }} ><button className={classes.backButton}>Back</button></div>
                    </Link>
                </div>
                <footer className={classes.footerSection}>
                    {paletteName}
                    <span>
                        {emoji}
                    </span>
                </footer>
            </div>
        )
    }
}

export default withStyles(styles)(ColorShadesPalette);