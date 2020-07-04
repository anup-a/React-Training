import React, { Component } from 'react';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { styles } from './styles/NavbarStyles';



class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSnackbar: false
        }
        this.changeFormat = this.changeFormat.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }


    changeFormat(e) {
        this.props.changeFormat(e.target.value);
        this.setState({
            showSnackbar: true
        })
    }

    handleClose() {
        this.setState({
            showSnackbar: false
        })
    }

    render() {
        // console.log(this.props.showLevelHandler);
        const { classes } = this.props;

        return (
            <nav className={classes.Nav}>
                <div className={classes.Logo}>
                    <a href="#">
                        <span role="img">🎨</span>
                    </a>
                </div>
                {this.props.showLevelHandler && (<div className={classes.SliderContainer}>
                    <span className="level-name">Level : {this.props.level}</span>
                    <div className={classes.Slider}>
                        <Slider min={100} max={900} step={100} defaultValue={this.props.level} onChange={this.props.changeLevel} />
                    </div>
                </div>)}
                <div className="select-container">
                    <Select value={this.props.colorFormat} onChange={this.changeFormat}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.showSnackbar}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message={<span> Changed format to {this.props.colorFormat} 🎉🎉</span>}
                    action={
                        <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    }
                />
            </nav>
        )
    }
}

export default withStyles(styles)(Navbar);