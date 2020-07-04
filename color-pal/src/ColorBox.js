import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles/ColorBoxStyles';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false })
            }, 1500)
        })
    }
    render() {
        const { name, color, paletteId, colorId, showMoreButton, classes } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={color} onCopy={this.handleCopy}>
                <div className={classes.ColorBox} style={{ backgroundColor: color }} >
                    <div className={`${classes.CopyOverlay} ${copied && classes.ShowCopyOverlay}`} style={{ backgroundColor: color }} />
                    <div className={`${classes.CopyOverlayText} ${copied && classes.ShowOverlayText}`}>
                        <h1>Copied</h1>
                        <p>{color}</p>
                    </div>
                    <div>
                        <div className={classes.BoxContent}>
                            <span className="color-name">{name}</span>
                        </div>
                        <button className={classes.CopyButton}>Copy</button>
                    </div>
                    {showMoreButton && (<Link to={`/palette/${paletteId}/${colorId}`} >
                        <span className={classes.More}>MORE</span>
                    </Link>)}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);