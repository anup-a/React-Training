import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const styles = {
    root: {
        backgroundColor: "white",
        // border: "1px solid black",
        // borderRadius: "5px",
        position: "relative",
        // overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        },
        margin: "0.5rem 1rem",
        padding: "0.75rem"
    },
    paletteColors: {
        backgroundColor: "#dae1e4",
        height: "110px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        textTransform: "uppercase",
        fontSize: "1rem",
        marginTop: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
        fontWeight: "600",
        letterSpacing: "0.5 cm",
        textDecoration: "none",
    },
    emoji: {
        fontSize: "1.4rem",
        textDecoration: "none",
    },
    miniColorBox: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-5px"

    }
}


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