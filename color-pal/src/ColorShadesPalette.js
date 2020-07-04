import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { styles } from './styles/ColorShadePaletteStyles';

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