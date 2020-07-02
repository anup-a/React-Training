import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    ColorBox: {
        width: "20%",
        height: props => props.showMoreButton ? "25%" : "50%",
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        marginBottom: "-5px",
        "&:hover button": {
            opacity: "1",
            transition: "0.5s",
            border: "none",
        }
    },
    CopyButton: {
        position: "absolute",
        height: "30px",
        width: "60px",
        top: "50%",
        left: "50%",
        marginLeft: "-30px",
        marginTop: "-15px",
        border: "none",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        color: props => chroma(props.color).luminance() >= 0.7 ? "black" : "white",
        opacity: "0",
        "&:hover": {
            curosr: "pointer",
        },
        "&:focus": {
            border: "none",
            outline: "none",
        }
    },
    BoxContent: {
        position: "absolute",
        left: "0",
        bottom: "0",
        textTransform: "uppercase",
        letterSpacing: "0.1cm",
        fontSize: "12px",
        color: props => chroma(props.color).luminance() <= 0.07 ? "rgba(255,255,255,0.4)" : "black",
    },
    More: {
        position: "absolute",
        right: "0",
        bottom: "0",
        textTransform: "uppercase",
        letterSpacing: "1px",
        fontSize: "13px",
        textAlign: "center",
        border: "none",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        color: props => chroma(props.color).luminance() >= 0.7 ? "black" : "white",
        height: "20px",
        width: "60px",
    },
    CopyOverlay: {
        zIndex: "0",
        width: "100%",
        height: "100%",
        opacity: "0",
        transform: "scale(0.1)",
        transition: "all 0.5s ease-in-out",
    },
    ShowCopyOverlay: {
        opacity: "1",
        transform: "scale(10)",
        zIndex: "10",
        position: "absolute",
    },
    CopyOverlayText: {
        position: "fixed",
        display: "flex",
        left: "0",
        top: "0",
        bottom: "0",
        right: "0",
        justifyContent: "center",
        alignItems: "center",
        opacity: "0",
        zIndex: "0",
        transform: "scale(0.1)",
        fontSize: "3rem",
        flexDirection: "column",
        "& h1": {
            color: props => chroma(props.color).luminance() >= 0.7 ? "black" : "white",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textAlign: "center",
            padding: "1rem",
            margin: "0",
        },
        "& p": {
            color: props => chroma(props.color).luminance() >= 0.7 ? "black" : "white",
            width: "100%",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.1cm",
            fontSize: "20px",
            fontWweight: "100",
        }
    },
    ShowOverlayText: {
        opacity: "1",
        zIndex: "11",
        transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        transitionDelay: "0.3s",
        transform: "scale(1)",
    }
}

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