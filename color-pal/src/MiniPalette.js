import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from "./styles/MiniPaletteStyles";

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors, handleClick } = props;
    console.log(props,)
    const paletteColorBoxes = colors.map((color) => <div className={classes.miniColorBox} style={{ backgroundColor: color.color }} key={color.name}></div>)
    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.paletteColors}>{paletteColorBoxes}</div>
            <div className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></div>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);