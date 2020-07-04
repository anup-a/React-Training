import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles/PaletteListStyles';

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
