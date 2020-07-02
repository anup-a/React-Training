import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles'
// import classes from '*.module.css';


const styles = {
    PaletteList: {
        background: "rgb(189, 189, 189)",
        // width: "50%",

        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    main: {
        display: "flex",
        flexDirection: "column",
        width: "60%",
        alignItems: "flex-start",
        flexWrap: "wrap",
        height: "100%",
    },
    navbar: {
        display: "inline-block",
    },

    navTitle: {
        fontSize: "2rem",
    },
    listContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridColumnGap: "5%",
        boxSizing: "border-box",
        width: "100%",
    }
}

class PaletteList extends Component {

    goToPalette(id) {
        this.props.history.push(`palette/${id}`);
    }
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.PaletteList}>
                <div className={classes.main}>
                    <nav className={classes.navbar}>
                        <div className={classes.navTitle}> Color Palettes</div>
                    </nav>
                    <div className={classes.listContainer}>
                        {
                            this.props.palette.map(palette =>
                                <MiniPalette {...palette} key={palette.paletteName} handleClick={() => this.goToPalette(palette.id)} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);
